import React from "react";
import iosLogo from "../assests/images/ios logo.png";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] bg-red-300 flex items-center justify-center">
      <div className="w-[400px] bg-white pb-8 shadow-emerald-900 shadow-lg rounded-md">
        <div className="flex justify-center pt-10 flex-col items-center">
          <img src={iosLogo} className="w-[80px] "></img>
          <div className="w-[70%] min-[500px]:w-[60%] text-center font-bold text-[1.2rem] p-4">
            Tour & Travel Expense Tracker System
          </div>

          <div className="w-[80%] border-2 border-gray-300 flex my-2">
            <div className="w-[30px] h-[30px] ">
              <AiTwotoneMail className="w-[100%] h-[100%]"></AiTwotoneMail>
            </div>
            <input
              placeholder="email id or username"
              className="w-full  px-2 "
            ></input>
          </div>
          <div className="w-[80%] border-2 border-gray-300 flex my-2">
            <div className="w-[30px] h-[30px] ">
              <RiLockPasswordLine className="w-[100%] h-[100%]"></RiLockPasswordLine>
            </div>
            <input
              placeholder="enter password"
              className="w-full  px-2 "
            ></input>
          </div>
          <div className="w-[80%]  border-gray-300 flex my-2">
            <p className="font-bold">User Type :</p>
            <select className="border-2 px-2 mx-2">
              <option>Admin</option>
              <option>Employee</option>
            </select>
          </div>
          <div className="w-[80%]  border-gray-300 flex my-2 justify-end">
            <div
              className="bg-red-300 p-2 rounded-md font-semibold text-white hover:bg-red-500 cursor-pointer"
              onClick={() => {
                navigate("/home");
              }}
            >
              Sign in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;