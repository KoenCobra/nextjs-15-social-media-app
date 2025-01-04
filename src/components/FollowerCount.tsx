"use client";

import useFollowerInfo from "@/hooks/useFollowerInfo";
import { FollowerInfo } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import React from "react";

interface FollowerCountProps {
  userId: string;
  initialState: FollowerInfo;
}

const FollowerCount = ({ userId, initialState }: FollowerCountProps) => {
  const { data } = useFollowerInfo(userId, initialState);
  return (
    <div>
      Followers:{" "}
      <span className="font-semibold">{formatNumber(data.followers)}</span>
    </div>
  );
};

export default FollowerCount;
