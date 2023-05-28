import prisma from "../prisma";

export default async function getUserByEmail(email: string) {
  if (!email) return null;
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      authored: true,
    },
  });
  return user;
}
