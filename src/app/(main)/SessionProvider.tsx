"use client";

import { useUser } from "@clerk/nextjs";
import { User } from "@/lib/types";
import React, { createContext, useContext } from "react";

interface SessionContext {
  user: User | null;
}

const SessionContext = createContext<SessionContext | null>(null);

const SessionProvider = ({ children }: React.PropsWithChildren) => {
  const { user: clerkUser, isLoaded } = useUser();

  // Transform Clerk user to our User type
  const user: User | null = clerkUser && isLoaded ? {
    id: clerkUser.id,
    username: clerkUser.username || clerkUser.emailAddresses[0]?.emailAddress?.split('@')[0] || 'user',
    displayName: clerkUser.fullName || clerkUser.firstName || 'User',
    avatarUrl: clerkUser.imageUrl || null,
  } : null;

  return (
    <SessionContext.Provider value={{ user }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export default SessionProvider;
