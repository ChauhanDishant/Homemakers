import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Signup = () => {
  const [fullname, setFullName] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    axios.defaults.baseURL = "http://localhost:5000/";
    e.preventDefault();
    try {
      const res = await axios.post("/homemakers/signup", {
        fullname,
        email,
        phonenumber,
        password,
      });

      if (res.data.success) {
        toast.success("User created successfully.");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again later.");
      console.error("Signup Error:", err);
    }
  };

  return (
    <>
      <Helmet>
        <title>HomeMakers</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center pt-20 py-10">
        <div className="max-w-screen-lg w-full mx-auto px-4">
          <div className="bg-white shadow sm:rounded-lg flex justify-center flex-1 gap-4 py-8 lg:py-12 px-6 lg:px-12">
            <div className="lg:w-1/2 xl:w-6/12">
              <div className="mt-4 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
                <div className="w-full flex-1 mt-4">
                  <div className="mx-auto max-w-xl gap-3">
                    <div className="grid md:grid-cols-1 mb-4">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        name="fullname"
                        type="text"
                        placeholder="Full Name"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="grid md:grid-cols-[47%_auto] grid-cols-1 mb-4 gap-3">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="number"
                        placeholder="Phone-Number"
                        value={phonenumber}
                        onChange={(e) => setphonenumber(e.target.value)}
                      />
                    </div>

                    <div className="w-full gap-3 mb-4">
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      className="mt-3 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      onClick={handleSignup}
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Sign Up</span>
                    </button>
                    <p className="text-gray-500 text-lg mt-4">
                      Already Registered?
                      <span className="mx-1 text-blue-600 underline">
                        <Link to="/login">Login</Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 xl:w-6/12 bg-indigo-100 text-center">
              <div
                className="m-4 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("/Signup_Image.svg")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
