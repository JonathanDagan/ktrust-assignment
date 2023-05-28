import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import { jwtSign } from "../../utils/auth/jwt";
import updateUser from "../../utils/db/user/updateUser";
import userViewer from "../../view/userViewer";

/**
 * User controller that updates the current user with info given on the body of the request.
 * @param req Request with authenticated user in the auth property and new information on the body of the request
 * @param res Response
 * @param next NextFunction
 * @returns
 */
export default async function userUpdate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const username = req.auth?.user?.username;
  const info = req.body.user;
  try {
    // Get current user
    const user = await updateUser(username, info);
    if (!user) return res.sendStatus(404);

    // Create the user token for future authentications
    const token = jwtSign(user);

    // Create the user view with the authenticated token
    const userView = userViewer(user, token);

    return res.json(userView);
  } catch (error) {
    return next(error);
  }
}
