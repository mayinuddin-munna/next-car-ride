"use client";
import { Button } from "@heroui/button";
import { signIn } from "next-auth/react";

const GoogleLoginBtn = () => {
  return (
    <Button
      onClick={() => {
        signIn("google", { callbackUrl: "/" });
      }}
    >
      Log In With Google
    </Button>
  );
};

export default GoogleLoginBtn;
