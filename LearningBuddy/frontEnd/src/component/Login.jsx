import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-800 dark:text-white ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog ">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-6 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">Email is required</span>}
            </div>
            <div className="mt-2 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
               {errors.password && <span className="text-sm text-red-500">Password is required</span>}
            </div>
            <div className="flex justify-around mt-6">
              <button className=" text-white px-3 py-1 rounded-md bg-purple-700 hover:bg-blue-500 hover:text-black duration-300 cursor-pointer">
                Login
              </button>
              <p className="">
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
      </dialog>
    </div>
  );
}

export default Login;
