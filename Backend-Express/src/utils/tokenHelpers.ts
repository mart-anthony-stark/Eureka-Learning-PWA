import { Request, Response, NextFunction } from "express";
import config from "../config/config";
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

// helper methods
const createToken = (user: Object) => {
  return jwt.sign({ user }, config.jwt.secret, { expiresIn: maxAge });
};

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization,
      config.jwt.secret,
      (err: Error, token: any) => {
        if (err) return res.status(401).json({ error: "Unauthorized" });

        token.password = null;
        res.locals = token;
        next();
      }
    );
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = {
  createToken,
  isAuth,
};
