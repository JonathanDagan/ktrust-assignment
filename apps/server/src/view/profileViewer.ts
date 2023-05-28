import { User } from "@prisma/client";


export default function profileViewer(
  user: User,
  currentUser?: User
) {
  const userView = {
    username: user.username,
    bio: user.bio,
    image: user.image,
  };
  return userView;
}