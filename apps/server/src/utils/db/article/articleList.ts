import prisma from "../prisma";

export default async function articleList(
  authorUsername?: string,
  limit = 20,
  offset = 0
) {
  const articles = await prisma.article.findMany({
    where: {
      authorUsername,
    },
    include: {
      author: true,
    },
    take: limit,
    skip: offset,
    orderBy: { updatedAt: "desc" },
  });
  return articles;
}
