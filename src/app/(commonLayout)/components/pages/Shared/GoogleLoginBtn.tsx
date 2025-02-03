"use client";
import { Button } from "@heroui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const GoogleLoginBtn = () => {
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");
  return (
    <Button
      onPress={() => {
        signIn("google", { callbackUrl: redirect ? redirect : "/" });
      }}
    >
      Log In With Google
    </Button>
  );
};

export default GoogleLoginBtn;
