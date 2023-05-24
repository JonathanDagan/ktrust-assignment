import jwt from "jsonwebtoken";

import { ENV } from "../config/env";
import { SigningAlgorithm } from "./consts";

const generateToken = (user: object) => {
  return jwt.sign(user, ENV.JWT_SECRET, {
    expiresIn: ENV.JWT_EXPIRATION,
    algorithm: SigningAlgorithm,
  });
};

export default generateToken;
