import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";
import loginImage from "@/assets/login-image.jpg";

const page = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-3xl font-bold">Login to bugbook</h1>
          <LoginForm />
          <Link className="block text-center hover:underline" href="/signup">
            Don&apos;t have an account? Sign up
          </Link>
        </div>
        <Image
          src={loginImage}
          alt="login image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
};

export default page;
