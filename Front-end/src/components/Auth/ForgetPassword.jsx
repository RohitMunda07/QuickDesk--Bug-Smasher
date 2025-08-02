import React from "react";

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
  
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-600 p-3 rounded-full">
          
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M12 12h.01"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Reset Password
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your email address and we'll send you a reset link
        </p>

        
        <div className="mb-4 text-left">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-purple-50 px-3 py-2">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z"
              />
            </svg>
            <input
              type="email"
              id="email"
              placeholder="you@company.com"
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
        </div>

       
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-md transition">
          Send Reset Link
        </button>

        <div className="mt-6 text-sm text-gray-600">
          <a href="#" className="flex items-center justify-center hover:underline">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
}