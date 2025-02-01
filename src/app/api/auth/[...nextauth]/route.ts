import { AuthOption } from "@/app/config/nextauth.config";
import NextAuth from "next-auth";

const handler = NextAuth(AuthOption);

export { handler as GET, handler as POST };
