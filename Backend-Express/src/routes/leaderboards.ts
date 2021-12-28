import express, { Router, Request, Response } from "express";
import User from "../models/User";
import Scores from "../models/Scores";

const { isAuth, createToken } = require("../utils/tokenHelpers");

const router = Router();

router.get("/user", isAuth, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(res.locals.user._id);
    res.json(user.score);
  } catch (e) {
    res.json({ error: "User not found" });
    console.log(e);
  }
});

// @POST
// ADD NEW SCORE
router.post("/add", async (req: Request, res: Response) => {
  try {
    const { score } = req.body;
    const newScore = new Scores({
      user: res.locals.user,
      score,
    });

    await newScore.save();
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ success: false });
  }
});

// @UPDATE USER SCORE
router.patch("/score", isAuth, async (req: Request, res: Response) => {
  const { score } = req.body;
  try {
    const user = await User.findByIdAndUpdate(res.locals.user._id, { score });
    user.score = score;
    const token = createToken(user);

    return res
      .status(200)
      .json({ success: true, msg: "Score updated successfully", token });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ success: false, msg: "Score update failed" });
  }
});

export default router;
