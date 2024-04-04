import type { User } from "@clerk/nextjs/server";

export const filterUserForClient = (user: User) => ({
  id: user.id,
  username: user.username,
  imageUrl: user.imageUrl,
});
