import dotenv from "dotenv";

dotenv.config();

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  keepAlive: true,
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_USERNAME || "";

const MONGO_URI =
  process.env.MONGO_URI ||
  "";

const MONGO = {
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  uri: MONGO_URI,
  options: MONGO_OPTIONS,
};

const JWT = {
  secret: "D0437NCo2D",
};

const config = {
  mongo: MONGO,
  jwt: JWT,
  corsURL: process.env.CORS_ALLOWED_URL || "*",
};

export default config;
