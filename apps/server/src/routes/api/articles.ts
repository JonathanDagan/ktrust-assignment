import { Router } from "express";
import * as articles from "../../controllers/articlesController";
import * as comments from "../../controllers/commentsController";
import * as validator from "../../middleware/articlesValidator";
import commentCreateValidator from "../../middleware/commentsValidator/commentCreateValidator";
import * as auth from "../../middleware/auth/authenticator";

const router = Router();

router.get(
  "/",
  auth.optionalAuthenticate,
  validator.articlesListValidator,
  articles.articlesList
);


router.get("/:slug", auth.optionalAuthenticate, articles.getArticlesGet);

router.post(
  "/",
  auth.authenticate,
  validator.articlesCreateValidator,
  articles.createArticles
);

router.post(
  "/:slug/comments",
  auth.authenticate,
  commentCreateValidator,
  comments.createComment
);

router.get("/:slug/comments", auth.optionalAuthenticate, comments.getComments);

router.delete(
  "/:slug/comments/:id([0-9]+)",
  auth.authenticate,
  comments.deleteComment
);

export default router;
