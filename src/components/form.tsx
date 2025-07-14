import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  emailSignup,
  buttonText = 'Sign Up'
}) => {
  const [togglePasswordVisibility, setTogglePasswordVisibility] =
    useState(false);
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-500"
        >
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          autoComplete="email"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
          placeholder="teacher@example.com"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-500"
        >
          Password
        </label>
        <input
          type={togglePasswordVisibility ? "text" : "password"}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
          placeholder="password"
        />
        <div className="absolute right-2 top-6.5 mt-2 mr-3">
          {togglePasswordVisibility ? (
            <span
              onClick={() =>
                setTogglePasswordVisibility(!togglePasswordVisibility)
              }
              className="text-sm text-gray-300 cursor-pointer"
            >
              <FaEyeSlash size={20} />
            </span>
          ) : (
            <span
              onClick={() =>
                setTogglePasswordVisibility(!togglePasswordVisibility)
              }
              className="text-sm text-gray-300 cursor-pointer"
            >
              <FaEye size={20} />
            </span>
          )}
        </div>
      </div>
      <div>
        {emailSignup ? (
          <div className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md flex items-center justify-center">
            <span className="loading loading-dots loading-md"></span>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-colors duration-200 cursor-pointer"
          >
           {buttonText}
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
