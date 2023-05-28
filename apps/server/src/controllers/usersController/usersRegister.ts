import { NextFunction, Request, Response } from "express";
import { jwtSign } from "../../utils/auth/jwt";
import createUser from "../../utils/db/user/createUser";
import { hashPassword } from "../../utils/auth/hash";
import userViewer from "../../view/userViewer";

/**
 * Users controller that registers the user with information given in the body of the request.
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns
 */
export default async function usersRegister(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password, username } = req.body.user;
  try {
    // Hash password
    const hashed = hashPassword(password);

    // Create the new user on the database
    const user = await createUser(username, email, hashed);

    // Create the authentication token for future use
    const token = jwtSign(user);

    // Create the user view with the authentication token
    const userView = userViewer(user, token);

    return res.status(201).json(userView);
  } catch (error) {
    return next(error);
  }
}
