"use client";
import { ChevronDown, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [country, setCountry] = useState<string>("bangladesh");
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <div className="w-full max-w-2xl bg-gradient-to-r from-violet-50 to-orange-50 px-12 py-20 rounded">
        <div>
          <h3 className="font-bold text-2xl text-black/70 text-center pb-2">
            Sign Up
          </h3>
          <p className="text-md text-black/60">
            Complete the registration process to start the journey with us
          </p>
        </div>
        <form>
          <div className="flex flex-col gap-2 pt-5">
            <label className="font-medium text-lg text-lightGreen">
              Reference by<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="bg-white py-2 border outline-none px-2 rounded-sm w-full border-simpleGreen"
            />
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <label className="font-medium text-lg text-lightGreen">
              Username or Email<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="bg-white py-2 border outline-none px-2 rounded-sm w-full border-simpleGreen"
            />
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <label className="font-medium text-lg text-lightGreen">
              E-Mail Address<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="bg-white py-2 border outline-none px-2 rounded-sm w-full border-simpleGreen"
            />
          </div>
          {/* country & mobile number section start */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 pt-5 w-[50%]">
              <label className="font-medium text-lg text-lightGreen">
                Country
              </label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="w-full border outline-none px-5 py-5 cursor-pointer text-lightGreen font-normal text-lg border-simpleGreen rounded-sm">
                  <SelectValue
                    placeholder="Select a country"
                    className="text-lightGreen"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="united-states">United States</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* mobile number */}
            <div className="flex flex-col gap-2 pt-5 w-[50%]">
              <label className="font-medium text-lg text-lightGreen">
                Mobile<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="+880"
                className="bg-white py-2 border outline-none px-2 rounded-sm w-full border-simpleGreen"
              />
            </div>
          </div>
          {/* country & mobile number section end */}

          {/* password section start */}
          <div className="pt-4 pb-4">
            <label className="font-medium text-lg text-lightGreen">
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
          <div className="pt-4 pb-4">
            <label className="font-medium text-lg text-lightGreen">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="bg-white py-2 border outline-none px-2 rounded-sm w-full border-simpleGreen pr-10"
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                {showConfirmPassword ? (
                  <Eye
                    className="cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <EyeOff
                    className="cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </span>
            </div>
          </div>
          {/* password section end */}

          {/* Privacy Policy , Terms & Conditions , Refund Policy start */}
          <div className="pb-3 pt-1 pl-2 flex gap-2">
            <input type="checkbox" />
            <h4>
              I agree with{" "}
              <span>
                <Link href={"/"} className="text-lightGreen font-bold">
                  Privacy Policy
                </Link>{" "}
                {", "}
                <Link href={"/"} className="text-lightGreen font-bold">
                  Terms & Conditions
                </Link>{" "}
                {", "}
                <Link href={"/"} className="text-lightGreen font-bold">
                  Refund Policy
                </Link>
              </span>
            </h4>
          </div>
          {/* Privacy Policy , Terms & Conditions , Refund Policy end */}
          <button
            type="submit"
            className="bg-simpleGreen hover:bg-lightGreen cursor-pointer text-white font-semibold py-2 px-4 rounded-sm w-full"
          >
            Sign In
          </button>
        </form>
        <div className="text-sm pt-2">
          <p className="pt-2 font-normal text-black/80 text-lg">
            Already have an account
            <Link
              href="/register"
              className="hover:text-blue-600 text-lightGreen font-semibold underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
