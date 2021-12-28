import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    user: Object,
    body: String,
    likes: Array,
    comments: Array,
    date: String
  },
  { timestamps: true }
);

export default model("Posts", postSchema);
