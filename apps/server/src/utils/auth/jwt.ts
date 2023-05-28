import jwt from "jsonwebtoken";

import { ENV } from "../../config/env";
import { SigningAlgorithm } from "../consts";

const privateKey = ENV.JWT_SECRET;
const expiresIn = ENV.JWT_EXPIRATION;

// TODO: fix any
/**
 * @param user
 * @returns token
 * @description creates a jwt token
 * @example
 * const token = jwtSign(user);
 */
export const jwtSign = (user: any) => {
  if (user.password) {
    delete user.password;
  }
  return jwt.sign(user, privateKey, {
    expiresIn: expiresIn,
    algorithm: SigningAlgorithm,
  });
};

/**
 * @param token
 * @returns decoded token
 * @description verifies a jwt token and returns the decoded token
 * @example
 * const decodedToken = jwtVerify(token);
 */
export const jwtVerify = (token: string) => {
  return jwt.verify(token, privateKey, {
    algorithms: [SigningAlgorithm],
  });
};
