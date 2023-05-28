import prisma from "../prisma";

export default async function getArticle(slug: string) {
  const article = await prisma.article.findUnique({
    where: { slug },
  });
  return article;
}
