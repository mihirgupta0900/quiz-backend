import express from "express"
import authRoutes from "./routes/authRoutes"
import cookieSession from "cookie-session"
import { __cookie_key__ } from "./utils/contants"
// import passport from "passport"
import passport from "./utils/passport"
import cors from "cors"
import morgan from "morgan"

const app = express()
app.use(cors({ origin: "http://localhost:8000", credentials: true }))
app.use(morgan("dev"))
app.use(express.json())
app.use(
  cookieSession({
    // milliseconds of a day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [__cookie_key__],
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.get("/", (_, res) => res.send("hey"))
app.use("/auth", authRoutes)

export default app
