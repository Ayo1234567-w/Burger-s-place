import React, { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Eggy's Place" className="h-10" />
        </div> 
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        <p className="text-gray-400 text-center mb-4">
          Let’s get you started so you can start joining and creating events
        </p>
        <form>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                👁
              </button>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-yellow-500">
                  terms & conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-black font-bold py-3 rounded-lg hover:bg-yellow-700 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-yellow-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
