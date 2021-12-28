import express, { Router, Request, Response } from "express";
import Posts from "../models/Posts";
const { isAuth } = require("../utils/tokenHelpers");

const router = Router();

// @GET ALL POSTS
router.get("/", async (req: Request, res: Response) => {
  try {
    const posts = await Posts.find();
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
});

// @POST
// CREATE POST
router.post("/create", isAuth, async (req: Request, res: Response) => {
  try {
    const { body } = req.body;
    const newPost = new Posts({
      user: res.locals.user,
      body,
      likes: [],
      comments: [],
      date: new Date(),
    });

    await newPost.save();
    return res.status(200).json({ success: true, post: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
});

// @DELETE POST
router.delete("/trash/:id", isAuth, async (req: Request, res: Response) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post.user._id === res.locals.user._id) {
      return res.status(401).json({ success: false, error: "Invalid user" });
    }
    await Posts.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(401).json({ success: false });
  }
});

// @PATCH
// Update likes
router.patch("/like", isAuth, async (req: Request, res: Response) => {
  try {
    const { postId } = req.body;
    const userId = res.locals.user._id;
    const post = await Posts.findOne({ _id: postId });

    if (!post)
      return res.status(404).json({
        success: false,
        error: "Post not found. The post id is invalid",
      });

    const likersId = post.likes.map((liker: any) => liker._id);
    const likedAlready = likersId.includes(userId);

    if (likedAlready) {
      await Posts.findByIdAndUpdate(postId, {
        $pull: {
          likes: res.locals.user,
        },
      });

      return res
        .status(200)
        .json({ success: true, message: "Disliked the post" });
    } else {
      await Posts.findByIdAndUpdate(postId, {
        $addToSet: {
          likes: res.locals.user,
        },
      });
      return res.status(200).json({ success: true, message: "Liked the post" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Error updating the post" });
  }
});

// @PUT
// ADD COMMENT
router.put("/comment/:postID", isAuth, async (req: Request, res: Response) => {
  try {
    const post = await Posts.findById(req.params.postID);
    const commentId = post.comments.length++;
    await Posts.findByIdAndUpdate(req.params.postID, {
      $push: {
        comments: {
          id: commentId,
          user: res.locals.user,
          comment: req.body.comment,
          userImage: `https://ui-avatars.com/api/?name=${res.locals.user.username}&background=random`,
        },
      },
    });

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ success: false });
  }
});

// @DELETE POST COMMENT
router.delete(
  "/comment/:postID/:commentID",
  async (req: Request, res: Response) => {
    try {
      const post = await Posts.findById(req.params.postID);
      const comment: any = post.comments.filter(
        (c: any) => c.id == req.params.commentID
      );
      if (comment[0].user._id == res.locals.user._id.toString()) {
        await Posts.findByIdAndUpdate(req.params.postID, {
          $pullAll: {
            comments: comment,
          },
        });
      }
      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ success: false });
    }
  }
);

export default router;
