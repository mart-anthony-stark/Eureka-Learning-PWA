import express, { Request, Response, NextFunction } from "express";
import User from "../models/User";
import config from "../config/config";
const jwt = require("jsonwebtoken");
const { createToken } = require("../utils/tokenHelpers");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.get(
  "/islogged",
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      jwt.verify(
        req.headers.authorization,
        config.jwt.secret,
        (err: Error, token: any) => {
          if (err) return res.json({ error: "Unauthorized" });

          token.user.password = null;
          res.status(200).json({ msg: "Authorized", user: token });
        }
      );
    } else {
      res.json({ error: "Unauthorized" });
    }
  }
);


// @POST
// User login authentication
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(404).json({ error: "User not found!", success: false });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res
      .status(401)
      .json({ error: "Password is incorrect", success: false });

  //   CREATE JWT TOKEN
  const token = createToken(user);
  res.cookie("jwt", token, { maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true });

  res.status(200).json({ user, success: true, token });
});

// @POST
// User Signup Route
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
    const nameExist = await User.findOne({ username });
    if (user) {
      return res.status(403).json({
        error: {
          email: "Email already exists. Please register another email account",
        },
      });
    }

    if (nameExist) {
      return res.status(403).json({
        error: {
          email:
            "That username is already taken. Please register with another username",
        },
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPass,
      photo: `https://ui-avatars.com/api/?background=random&name=${username}`,
      score: 0,
    });

    await newUser.save();
    // CREATE TOKEN
    const token = createToken(newUser);
    res.cookie("jwt", token, {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    res.status(200).json({ user: newUser, success: true, token });
  } catch (e: any) {
    console.log(e);
    return res.status(400).json({ error: e });
  }
});

router.get("/logout", (req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 1,
      httpOnly: true,
    });
    res.json({ success: true });
  } catch (e) {
    res.json({ success: false });
  }
});

export default router;
