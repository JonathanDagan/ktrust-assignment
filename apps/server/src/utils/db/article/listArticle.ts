import prisma from "../prisma";

export default async function listArticles(
  authorUsername?: string,
  limit = 20,
  offset = 0
) {
  const articles = await prisma.article.findMany({
    where: {
      authorUsername,
    },
    take: limit,
    skip: offset,
    orderBy: { updatedAt: "desc" },
  });
  return articles;
}
