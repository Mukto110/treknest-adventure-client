import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      console.log(result);
      alert("signIn successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex py-20 justify-center">
      <div className="container px-6 mx-auto flex justify-center">
        <form
          onSubmit={handleLoginIn}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-semibold text-gray-700 text-center">
            Sign In
          </h1>

          {/* Email Input */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Sign In Button */}
          <button className="w-full mt-6 py-3 text-white bg-primary rounded-md hover:bg-primary-dark transition text-sm font-medium">
            Sign in
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or sign in with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-In Button */}
          <button className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition text-sm font-medium">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 40 40">
              <path
                fill="#FFC107"
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              />
            </svg>
            Sign in with Google
          </button>

          {/* Sign Up Link */}
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
