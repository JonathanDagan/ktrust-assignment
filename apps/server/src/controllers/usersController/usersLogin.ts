import { NextFunction, Request, Response } from "express";
import { jwtSign } from "../../utils/auth/jwt";
import getUserByEmail from "../../utils/db/user/getUserByEmail";
import { compareWithHash } from "../../utils/auth/hash";
import userViewer from "../../view/userViewer";

/**
 * Users controller for the login function sending a valid jwt token in the response if login is successful.
 * @param req Request with a body property body containing a json with user object with name and email as properties.
 * @param res Response
 */
export default async function userLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body.user;
  try {
    // Get the user with given email
    const user = await getUserByEmail(email);
    if (!user) return res.sendStatus(404);

    // Compare the user password given with the one stored
    console.log(password, user.password);
    if (!compareWithHash(password, user.password)) return res.sendStatus(403);

    // Create the user token for future authentication
    const token = jwtSign(user);

    // Create the user view containing the authentication token
    const userView = userViewer(user, token);

    return res.json(userView);
  } catch (error) {
    return next(error);
  }
}
