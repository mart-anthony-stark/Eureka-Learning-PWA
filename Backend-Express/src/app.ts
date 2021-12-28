import express, {
  Errback,
  Application,
  Request,
  Response,
  NextFunction,
} from "express";
import config from "./config/config";
import auth from "./routes/auth";
import users from "./routes/users";
import leaderboards from "./routes/leaderboards";
import posts from "./routes/posts";
import mongoose from "mongoose";
import User from "./models/User";

const { isAuth } = require("./utils/tokenHelpers");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app: Application = express();

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: config.corsURL }));

app.use("/auth", auth);
app.use("/users", users);

app.get("/home", isAuth, (req: Request, res: Response, next: NextFunction) => {
  res.send("TEST");
});

app.use("/scores", isAuth, leaderboards);

app.use("/posts", posts);

app.get("/leaderboards", async (req: Request, res: Response) => {
  try {
    let scores = await User.find().sort({ score: -1 }).limit(10);

    scores = scores.filter((user: any) => user.score > 0);

    res.json(scores);
  } catch (error) {
    res.json({ error });
  }
});

mongoose
  .connect(config.mongo.uri, config.mongo.options)
  .then(() => console.log(`Connected to DB`))
  .catch((e: Errback) => console.log(e));

app
  .listen(PORT, () => {
    console.log(`Server is now listening to port ${PORT}`);
  })
  .on("error", (e: Errback) => {
    console.error(e);
  });
