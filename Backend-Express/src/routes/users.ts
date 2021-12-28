import express, { Router, Request, Response } from "express";
import User from "../models/User";

const router = Router();

// @GET
// All users
router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(502).json({ error: "Error" });
  }
});

// @GET query users
router.get("/search", async (req: Request, res: Response) => {
  try {
    const user = await User.find(req.query);

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(502).json({ error: "Error" });
  }
});

// @GET
// Users by id
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(502).json({ error: "Error" });
  }
});

export default router;
