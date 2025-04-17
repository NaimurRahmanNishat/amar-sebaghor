"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-gradient-to-r from-violet-50 to-orange-50 px-12 py-20 rounded">
        <h3 className="font-bold text-2xl text-black/70 text-center pb-2">
          Login
        </h3>
        <p className="text-md text-black/60">
          Login here to enter into your dashboard
        </p>
        <form>
          <div className="flex flex-col gap-2 pt-5">
            <label className="font-bold text-lg text-lightGreen">
              Username or Email <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="bg-white py-2 border outline-none px-2 rounded-sm w-full border-simpleGreen"
            />
          </div>
          <div className="pt-4 pb-4">
            <label className="font-bold text-lg text-lightGreen">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-white py-2 border outline-none px-2 rounded-sm w-full border-simpleGreen pr-10"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                {showPassword ? (
                  <Eye
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeOff
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-simpleGreen hover:bg-lightGreen cursor-pointer text-white font-semibold py-2 px-4 rounded-sm w-full"
          >
            Sign In
          </button>
        </form>
        <div className="text-sm pt-6">
          <h4 className="text-lightGreen font-bold text-lg underline hover:text-blue-500 cursor-pointer">
            Forgot your password?
          </h4>
          <p className="pt-2 font-normal text-black/80 text-lg">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="hover:text-blue-600 text-lightGreen font-semibold underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
