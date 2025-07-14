import React from "react";


const form = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  emailSignup,
}) => {
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
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-500"
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          autoComplete="current-password"
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
          placeholder="password"
        />
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
            Sign Up
          </button>
        )}
      </div>
    </form>
  );
};

export default form;
