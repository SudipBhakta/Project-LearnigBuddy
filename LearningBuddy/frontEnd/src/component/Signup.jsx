import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
//import { useForm, SubmitHandler } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Sucessfull");
        }
        localStorage.setItem("user",JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error " + err.response.data.message);
        }
      });
  };

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
          <div className="flex   justify-center mt-5 ">
            <div className="w-[400px]">
              <div className="modal-box dark:bg-slate-900 dark:text-white">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </Link>

                  <h3 className="font-bold text-lg">Signup</h3>
                  <div className="mt-6 space-y-2">
                    <br />
                  </div>
                  <div className="mt-2 space-y-2">
                    <span>Full Name</span>

                    <br />
                    <input
                      type="text"
                      placeholder="Enter Your Fullname"
                      className="w-80 px-3 py-2 border rounded-md outline-none dark:text-black"
                      {...register("fullName", { required: true })}
                    />
                  </div>
                  <div className="mt-2 space-y-2">
                    <span>Email</span>
                    <br />
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-80 px-3 py-2 border rounded-md outline-none dark:text-black"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="mt-2 space-y-2">
                    <span>Password</span>
                    <br />
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      className="w-80 px-3 py-2 border rounded-md outline-none dark:text-black"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div className="  mt-6">
                    <button className="text-white px-3 py-1 rounded-md bg-purple-700 hover:bg-blue-500 hover:text-black duration-300 cursor-pointer">
                      Signup
                    </button>
                    <p className="py-4">
                      Already have an account?
                      <Link
                        to="/login"
                        className=" underline text-purple-700 hover:text-blue-500 duration-300 cursor-pointer"
                      >
                        Login
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

export default Signup;
