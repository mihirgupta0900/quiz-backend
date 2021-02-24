import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { getRepository } from "typeorm"
import User from "../entity/user"
import { __google_client_id__, __google_client_secret__ } from "./contants"

passport.serializeUser((user, done) => {
  done(null, (user as User).id)
})

passport.deserializeUser<number>((id, done) => {
  getRepository(User)
    .findOne({ id })
    .then((user) => done(undefined, user))
})

passport.use(
  new GoogleStrategy(
    {
      clientID: __google_client_id__,
      clientSecret: __google_client_secret__,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      const repo = getRepository(User)
      // check if user exists
      // console.log(profile)
      repo
        .findOne({ googleId: profile.id })
        .then((user) => {
          if (user) {
            done(undefined, user)
          } else {
            const newUser = repo.create({
              googleId: profile.id,
              username: profile.displayName,
              email:
                profile.emails && profile.emails.length
                  ? profile.emails[0].value
                  : "",
              profile_pic_url:
                profile.photos && profile.photos.length
                  ? profile.photos[0].value
                  : "",
            })

            repo
              .save(newUser)
              .then((savedUser) => done(undefined, savedUser))
              .catch()
          }
        })
        .catch((e) => console.log(e))
    }
  )
)

export default passport
