import { User } from "@prisma/client";
import prisma from "../prisma";

export default async function getComments(slug: string, user?: User) {
  const comments = prisma.comment.findMany({
    where: { articleSlug: slug },
    include: {
      author: true,
    },
  });
  return comments;
}
