"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  handleGoogleLogin,
  handleEmailLogin,
} from "@/helper/auth";
import Form from "@/components/form";
import Loader from "@/components/loader";
import Button from "@/components/button";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const TeacherLoginPage = () => {
  const router = useRouter();
  const [google, setGoogle] = useState(false);
  const [emailSignup, setEmailSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailSignup(true);
    const res = await handleEmailLogin(email, password);
    if (res) {
      toast.success("User login successful", { position: "bottom-right" });
      router.push("/teacher/dashboard");
    } else {
      toast.error("firebase login failed");
      router.push("/teacher/login");
    }
    setEmailSignup(false);
  };

  const GoogleLogin = async () => {
    try {
      setGoogle(true);
      const res = await handleGoogleLogin();
      if (res) {
        const response = await axios.post("/api/auth/register", {
          email: res.email,
          role: "Teacher",
        });
        console.log("Response from server:", response.data);
        toast.success("User login successful", { position: "bottom-right" });
        router.push("/teacher/dashboard");
      } else {
        toast.error("firebase login failed");
        router.push("/teacher/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error during Google login:", error);
      if (error.status === 400) {
        toast.error(error.message);
      } else if (error.status === 500) {
        router.push("/error");
        toast.error("Internal Server Error");
      }
    } finally {
      setGoogle(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-purple-900 to-gray-900">
      <div className="backdrop-blur-2xl shadow-xl rounded-2xl p-8 w-full max-w-md  border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <div className="p-2 rounded-full border border-gray-300 shadow-sm mb-3 text-white">
            <FaUser size={25} />
          </div>
          <h2 className="text-2xl font-bold text-gray-300">Teacher Login</h2>
          <p className="text-gray-400 text-sm">Please login to continue.</p>
        </div>
        {/* Google Login Button */}
        <div>
          {google ? (
            <div className="w-full flex items-center justify-center gap-3 py-2 px-4 mb-4 border border-gray-300 bg-white rounded-lg shadow text-secondary">
              <Loader />
            </div>
          ) : (
            <Button onClick={GoogleLogin}>
              <FcGoogle size={20} />
              Sign In with Google
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
          buttonText='Log In'
        />

        <div className="mt-6">
          <span className="text-gray-400 text-sm">
            Don&apos;t have an account?{" "}
          </span>
          <Link
            href="/teacher/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherLoginPage;
