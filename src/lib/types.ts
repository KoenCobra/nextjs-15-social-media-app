import { Prisma } from "@prisma/client";

export const postDataIncludes = {
  user: {
    select: {
      username: true,
      displayName: true,
      avatarUrl: true,
    },
  },
} satisfies Prisma.PostInclude;

export type postData = Prisma.PostGetPayload<{
  include: typeof postDataIncludes;
}>;
