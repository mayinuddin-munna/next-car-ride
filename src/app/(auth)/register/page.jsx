"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleSignUp = async (data) => {}

    return (
        <div className="flex-row-reverse container flex-wrap px-5 py-24 mx-auto flex items-center justify-center">
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <div className="px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="mx-auto">
              <div className=" bg-gray-200 mt-4">
                <form
                  onSubmit={handleSubmit(handleSignUp)}
                  className="bg-gray-100 p-12 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
                >
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="username" // Use a separate field for username
                      placeholder="Full Name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-[#251546] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("username")}
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full bg-white rounded border border-gray-300 focus:border-[#251546] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-6 leading-8 transition-colors duration-200 ease-in-out;"
                      {...register("phone")}
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
                  <button type="submit" className="text-white uppercase bg-[#222] border-0 py-3 px-6 mt-4 focus:outline-none hover:bg-[#251546] text-lg">
                    Create Account
                  </button>
                  <div className="text-center mt-5">
                    Already have an account please{" "}
                    <Link href="/login" className="underline text-sm">
                      Sign In
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
            alt="..."
          />
        </div>
      </div>
    );
};

export default Register;