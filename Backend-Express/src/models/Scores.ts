import { Schema, model } from "mongoose";

const scoresSchema = new Schema(
  {
    user: Object,
    score: Number,
  },
  { timestamps: true }
);

export default model("Scores", scoresSchema);
