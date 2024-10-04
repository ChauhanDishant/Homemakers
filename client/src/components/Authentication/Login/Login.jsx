import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();

  axios.defaults.baseURL = "http://localhost:5000/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          window.location.reload(); // Reload when time runs out
          return 0; // Ensure timer doesn't go below 0
        }
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/homemakers/login", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(generatedOtp);

        const templateParams = {
          to_name: email,
          otp: generatedOtp,
        };

        emailjs
          .send(
            "Dishant Chauhan",
            "template_2ylklgk",
            templateParams,
            "c1jtuzQXyr_LLfOZi"
          )
          .then((result) => {
            toast.success("OTP Sent to your Email Account");
            console.log("OTP sent!", result.status, result.text);
            setOtpSent(true);
          })
          .catch((emailError) => {
            console.error("Failed to send OTP", emailError);
            toast.error("Failed to send OTP. Please try again.");
          });
      } else {
        toast.error(response.data.message);
        setEmail("");
        setPassword("");
      }
    } catch (loginError) {
      toast.error("Error during login. Please try again.");
    }
  };

  const verifyOtp = () => {
    if (otp.join("") === generatedOtp) {
      toast.success("You have signed in Successfully");
      console.log("OTP verified! Proceeding with sign-in...");
      navigate("/");
      setError("");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      axios.defaults.baseURL = "http://localhost:5000/";
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const userEmail = userInfo.data.email;

        const response = await axios.post("/homemakers/login", {
          email: userEmail,
          isGoogleSignIn: true, // Flag to indicate Google login
        });

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          toast.success("You have signed in successfully");
          navigate("/");
        } else {
          toast.error("User not registered. Please sign up first.");
        }
      } catch (googleLoginError) {
        toast.error("Error during Google sign-in. Please try again.");
      }
    },
    onError: (error) => {
      console.error("Google Sign-In failed", error);
      toast.error("Google Sign-In failed. Please try again.");
    },
  });

  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center pt-20 pb-4">
        {/* Added pt-20 here */}
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-6">
            <div className="mt-4 flex flex-col items-center gap">
              <h1 className="text-2xl xl:text-3xl font-extrabold text-indigo-600">
                Sign In
              </h1>
              <div className="w-full flex-1 mt-4">
                <div className="mx-auto max-w-md grid grid-cols-1 gap-4">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="User-Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="User-Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!otpSent ? (
                    <button
                      className="mt-1 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      onClick={sendOtp}
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="mx-2">Sign In</span>
                    </button>
                  ) : (
                    <>
                      <p className="text-center text-gray-600">
                        Enter the 4-digit verification code that was sent to
                        your email.
                      </p>
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-3">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              type="text"
                              className="w-16 h-16 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-slate-300 hover:border-slate-400 rounded-lg p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-150"
                              maxLength="1"
                              value={digit}
                              onChange={(e) =>
                                handleOtpChange(index, e.target.value)
                              }
                            />
                          ))}
                        </div>

                        <div
                          className={`mt-4 text-lg text-slate-700 ${
                            timer < 10 ? "text-red-400" : "text-slate-700"
                          }`}
                        >
                          {timer > 0
                            ? `Time remaining: ${timer}s`
                            : "Time's up!"}
                        </div>
                      </div>

                      {error && (
                        <p className="text-red-500 text-center mt-3">{error}</p>
                      )}
                      <button
                        className="mt-3 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        onClick={verifyOtp}
                      >
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy={7} r={4} />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="mx-2">Verify OTP</span>
                      </button>
                    </>
                  )}

                  <div className="text-center">
                    <button
                      className="tracking-wide font-semibold bg-red-500 text-gray-100 w-full py-4 rounded-lg hover:bg-red-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      onClick={() => handleGoogleLogin()}
                    >
                      <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="mx-2">Sign In with Google</span>
                    </button>
                  </div>

                  <p className="text-gray-500 text-lg">
                    Not Registered yet?
                    <span className="mx-1 text-blue-600 underline">
                      <Link to="/signup">Signup</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/Login_Image.svg")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
