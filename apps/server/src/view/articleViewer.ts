import { Article, User } from "@prisma/client";
import profileViewer from "./profileViewer";

type FullArticle = Article & {
  author: User
};

export default function articleViewer(
  article: FullArticle,
  currentUser?: User
) {
  const authorView = profileViewer(article.author, currentUser);

  const articleView = {
    slug: article.slug,
    title: article.title,
    description: article.description,
    body: article.body,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    author: authorView,
  };
  return articleView;
}