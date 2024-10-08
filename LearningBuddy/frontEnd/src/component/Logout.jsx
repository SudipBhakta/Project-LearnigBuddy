import React from "react";
import { useAuth } from "../ContextAPI/Auth";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handelLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("Logout Sucessfull", { duration: 3000 });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error" + error.message, { duration: 3000 });
    }
  };
  return (
    <div>
      <button
        className="text-white px-3 py-2 rounded-md bg-red-500 hover:bg-red-700  duration-300 cursor-pointer"
        onClick={handelLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
