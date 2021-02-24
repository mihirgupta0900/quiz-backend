import { Router } from "express"
import { authenticate } from "passport"

const router = Router()

router.get(
  "/google",
  authenticate("google", {
    scope: ["profile", "email"],
    failureRedirect: "http://localhost:8000",
  })
)

router.get("/google/redirect", authenticate("google"), (req, res) => {
  res.redirect("http://localhost:8000")
  console.log(req.user)
  // res.send(req.user)
  // res.send("you reached the redirect URI")
})

router.get("/", (req, res) => {
  // console.log(req.user)
  res.status(200).json(req.user)
})

export default router
