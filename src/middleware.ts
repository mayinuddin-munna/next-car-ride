/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decode } from "./helper/jwtHelpers";

const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    // Protecting hybrid routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(pathname ? `/login?redirect=${pathname}` : "/login", request.url)
      );
    }
  }

  // Roll based authentication
  let decodedToken = null;
  decodedToken = decode(accessToken) as any;

  const role = decodedToken?.role;
  // console.log({ role });

  if (role === "admin" && pathname === "/admin-dashboard") {
    return NextResponse.next();
  }

  if (role === "driver" && pathname === "/driver-dashboard") {
    return NextResponse.next();
  }

  if (role === "user" && pathname === "/dashboard") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "/driver-dashboard:page*",
  ],
};
