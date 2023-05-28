import prisma from "../prisma";

export default async function createUser(
  username: string,
  email: string,
  password: string
) {
  const user = await prisma.user.create({
    data: { username, email, password },
  });
  return user;
}
