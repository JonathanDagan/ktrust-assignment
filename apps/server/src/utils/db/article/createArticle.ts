import prisma from "../prisma";
import slugfy from "../../slugfy";

interface RequiredFields {
  title: string;
  description: string;
  body: string;
}

export default async function createArticle(
  info: RequiredFields,
  authorUsername: string
) {
  const slug = slugfy(info.title);
  const article = await prisma.article.create({
    data: {
      ...info,
      slug,
      authorUsername,
    },
    include: {
      author: true,
    },
  });
  return article;
}
