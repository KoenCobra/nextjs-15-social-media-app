import React from "react";
import avatarPlaceholder from "../assets/avatar-placeholder.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}
const UserAvatar = ({ size, className, avatarUrl }: UserAvatarProps) => {
  return (
    <Image
      src={avatarUrl || avatarPlaceholder}
      alt="avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
};

export default UserAvatar;
