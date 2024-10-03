import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
//import { useForm, SubmitHandler } from "react-hook-form";

function SignupToLogin() {
  return (
    <>
      <div className="h-screen bg-gradient-to-tl from-purple-700 via-purple-100 to-white dark:text-white">
        <div className=" h-screen bg-transparent dark:bg-slate-800">
          <div className="flex px-6 py-6">
            <img src={logo2} className="w-8 h-8" alt="" />
            <h1 className="text-2xl font-bold">LearningBuddy</h1>
          </div>
          <div>
            <h1 className=" px-6  text-4xl font-bold">
              Hello, welcome to LearningBuddy learn something{" "}
              <span className="text-fuchsia-600">new everyday!!</span>
            </h1>
          </div>
          <div id="" className="flex   justify-center mt-20">
            <div className="w-[400px]">
              <div className="modal-box dark:bg-slate-900 dark:text-white">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </Link>

                  <h3 className="font-bold text-lg">Login</h3>

                  <div className="mt-4 space-y-2">
                    <span>Email</span>
                    <br />
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-80 px-3 py-2 border rounded-md outline-none"
                    />
                  </div>
                  <div className="mt-2 space-y-2">
                    <span>Password</span>
                    <br />
                    <input
                      type="email"
                      placeholder="Enter Your Password"
                      className="w-80 px-3 py-2 border rounded-md outline-none"
                    />
                  </div>
                  <div className="  mt-6">
                    <button className="text-white px-3 py-1 rounded-md bg-purple-700 hover:bg-blue-500 hover:text-black duration-300 cursor-pointer">
                      Login
                    </button>
                    <p className=" mt-4">
                      Not registered?
                      <Link
                        to="/signup"
                        className=" underline text-purple-700 hover:text-blue-500 duration-300 cursor-pointer"
                      >
                        Signup
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupToLogin;
