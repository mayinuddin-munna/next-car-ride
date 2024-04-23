import bcrypt from "bcrypt";
import { ConnectDB } from "@/utils/connect";
import User from "../../../models/user.model";
import { NextResponse, NextServer } from "next/server";

export const POST = async (req) => {
  try {
    await ConnectDB();
    const { username, email, password } = await req.json();
    console.log(username, email, password);
    const exists = await User.findOne({ $or: [{ email }] });
    
    if (exists) {
      return NextServer.json(
        { message: "User email already taken." },
        { status: 500 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (err) {
    console.log("Error while register user", err);
    return NextResponse.json(
      { message: "User cannot be registered" },
      { status: 500 }
    );
  }
};
