"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { handleGoogleLogin, handleEmailSignup } from "@/helper/auth";
import Form from "@/components/form";
import Loader from "@/components/loader";
import Button from "@/components/button";

const TeacherSignupPage = () => {
  const [google, setGoogle] = useState(false);
  const [emailSignup, setEmailSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailSignup(true);
    const res = await handleEmailSignup(email, password);
    if (res) {
      setEmailSignup(false);
      setEmail("");
      setPassword("");
    } else {
      setEmailSignup(false);
    }
  };

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
            <div className="w-full flex items-center justify-center gap-3 py-2 px-4 mb-4 border border-gray-300 bg-white rounded-lg shadow text-secondary">
              <Loader />
            </div>
          ) : (
            <Button
              onClick={() => {
                setGoogle(true);
                handleGoogleLogin();
              }}
            >
              <FcGoogle size={20} />
              Sign up with Google
            </Button>
          )}
        </div>
        {/* Divider */}
        <div className="divider divider-secondary">OR</div>
        {/* form  */}

        <Form
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          emailSignup={emailSignup}
        />

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
