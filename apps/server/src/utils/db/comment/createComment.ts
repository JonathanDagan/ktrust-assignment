import { User } from "@prisma/client";
import prisma from "../prisma";

export default async function createComment(
  slug: string,
  content: string,
  author: User
) {
  const comment = await prisma.comment.create({
    data: { body: content, authorUsername: author.username, articleSlug: slug },
  });
  return comment;
}
