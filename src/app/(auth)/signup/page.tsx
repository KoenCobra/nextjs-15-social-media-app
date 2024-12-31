import { Metadata } from "next";
import React from "react";
import signupImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metaData: Metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Signup to bugbook</h1>
            <p className="text-muted-foreground">
              A place where even <i>you</i> can find a friend.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link className="block text-center hover:underline" href="/login">
              Already have an account? Login
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt="signup image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
};

export default SignUp;