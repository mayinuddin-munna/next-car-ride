"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import tempImage from'../../../../public/assets/images/Temp.png'

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleSignedIn = async (data) => {};

  return (
    <div className="flex-row-reverse container flex-wrap px-5 py-24 mx-auto flex items-center justify-center">
      <div className="flex flex-col md:w-1/2 md:pl-12">
        <div className="px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="mx-auto">
            <form
              onSubmit={handleSubmit(handleSignedIn)}
              className="bg-gray-100 p-12 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
            >
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#251546] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out;"
                  {...register("email")}
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#251546] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out;"
                  {...register("password")}
                />
              </div>
              <button
                type="submit"
                className="text-white uppercase bg-[#222] border-0 py-3 px-6 mt-4 focus:outline-none hover:bg-[#251546] text-lg"
              >
                Sign In
              </button>
              <div className="text-center mt-5">
                Don t have an account please{" "}
                <Link href="/register" className="underline text-sm">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
        <Image
          src={tempImage}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Login;
