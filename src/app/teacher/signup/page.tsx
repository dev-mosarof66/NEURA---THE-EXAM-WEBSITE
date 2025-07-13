"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { handleGoogleLogin, handleEmailSignup } from "@/helper/auth";

const TeacherSignupPage = () => {
  const [google, setGoogle] = useState(false);
  const [emailSignup, setEmailSignup] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-purple-900 to-gray-900">
      <div className="backdrop-blur-2xl shadow-xl rounded-2xl p-8 w-full max-w-md  border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <div className="p-2 rounded-full border border-gray-300 shadow-sm mb-3 text-white">
            <FaUser size={25} />
          </div>
          <h2 className="text-2xl font-bold text-gray-300">Join Us</h2>
          <p className="text-gray-400 text-sm">
            Create account to rock and role.
          </p>
        </div>
        {/* Google Login Button */}
        <div>
          {google ? (
            <div className="w-full flex items-center justify-center gap-3 py-2 px-4 mb-4 border border-gray-300 bg-white rounded-lg shadow text-black cursor-not-allowed">
              Signing up{"  "}
              <span className="loading loading-dots loading-sm"></span>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => handleGoogleLogin(setGoogle)}
              className="w-full flex items-center justify-center gap-3 py-2 px-4 mb-4 border border-gray-300 bg-white rounded-lg shadow hover:bg-gray-50/80 transition-colors duration-150 font-medium text-gray-700 cursor-pointer"
            >
              <FcGoogle size={20} />
              Sign Up with Google
            </button>
          )}
        </div>
        {/* Divider */}
        <div className="divider divider-secondary">OR</div>
        {/* Email/Password Form */}
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
              placeholder="teacher@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-500"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-colors duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <span className="text-gray-400 text-sm">
            Don&apos;t have an account?{" "}
          </span>
          <Link
            href="/teacher/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignupPage;
