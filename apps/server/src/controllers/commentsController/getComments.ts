import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import getComment from "../../utils/db/comment/getComment";
import getUser from "../../utils/db/user/getUser";
import commentViewer from "../../view/commentViewer";

/**
 * Comment controller that must receive a request with an optionally authenticated user.
 * The parameters of the request must have a slug to the article the comment belongs to.
 * @param req Request with an optionally jwt token verified
 * @param res Response
 * @param next NextFunction
 * @returns void
 */
export default async function getComments(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const slug = req.params.slug;
  const username = req.auth?.user?.username;

  try {
    // Get current user from database
    const currentUser = await getUser(username);

    // Get comments from database
    const comments = currentUser
      ? await getComment(slug, currentUser)
      : await getComment(slug);

    // Create comment view
    const commentsView = comments.map((comment) =>
      currentUser ? commentViewer(comment, currentUser) : commentViewer(comment)
    );

    return res.json({ comments: commentsView });
  } catch (error) {
    return next(error);
  }
}
