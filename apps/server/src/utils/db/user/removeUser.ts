import prisma from "../prisma";

export default async function removeUser(id: string) {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
}