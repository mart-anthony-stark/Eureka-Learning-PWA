import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: String,
    score: Number,
  },
  { timestamps: true }
);

export default model("User", userSchema);
