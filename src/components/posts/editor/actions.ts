"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { getPostDataInclude } from "@/lib/types";
import { createPostSchema } from "@/lib/validation";

export const submitPost = async (input: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const { content } = createPostSchema.parse({ content: input });

  // Ensure user exists in database, create if not
  await prisma.user.upsert({
    where: { id: userId },
    update: {},
    create: {
      id: userId,
      username: userId, // Will be updated via webhook
      displayName: "User", // Will be updated via webhook
    },
  });

  const newPost = await prisma.post.create({
    data: {
      content,
      userId,
    },
    include: getPostDataInclude(userId),
  });

  return newPost;
};
