import { Article, User } from "@prisma/client";
import profileViewer from "./profileViewer";

type FullArticle = Article & {
  author: User & { followedBy: User[] };
  _count: { favoritedBy: number };
};

export default function articleViewer(
  article: FullArticle,
  currentUser?: User & { favorites: Article[] }
) {
  const favorited = currentUser
    ? currentUser.favorites.some((value) => value.slug === article.slug)
    : false;

  const authorView = profileViewer(article.author, currentUser);

  const articleView = {
    slug: article.slug,
    title: article.title,
    description: article.description,
    body: article.body,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    favorited: favorited,
    favoritesCount: article._count.favoritedBy,
    author: authorView,
  };
  return articleView;
}