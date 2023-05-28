import { NextFunction, Response } from "express";
import { Request } from "express-jwt";
import createArticle from "../../utils/db/article/createArticle";
import getUser from "../../utils/db/user/getUser";
import articleViewer from "../../view/articleViewer";

interface Article {
  title: string;
  description: string;
  body: string;
}

/**
 * Article controller that must receive a request with an authenticated user.
 * The body of the request must have the article object that is an @interface Article.
 * @param req Request with a jwt token verified
 * @param res Response
 * @param next NextFunction
 * @returns void
 */
export default async function articlesCreate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description, body }: Article = req.body.article;
  const userName = req.auth?.user?.username;

  try {
    // Get current user
    const currentUser = await getUser(userName);
    if (!currentUser) return res.sendStatus(401);


    // Create the article
    const article = await createArticle(
      { title, description, body },
      currentUser.username
    );

    // Create article view
    const articleView = articleViewer(article, currentUser);
    return res.status(201).json({ article: articleView });
  } catch (error) {
    return next(error);
  }
}
