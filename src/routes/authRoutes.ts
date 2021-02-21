import { Router } from "express"
import { authenticate } from "passport"

const router = Router()

router.get(
  "/google",
  authenticate("google", {
    scope: ["profile", "email"],
  })
)

router.get("/google/redirect", authenticate("google"), (req, res) => {
  res.send(req.user)
  res.send("you reached the redirect URI")
})

export default router
