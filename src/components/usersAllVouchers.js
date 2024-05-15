import React, { useContext } from "react";
import Context from "../store/Context";

function UsersAllVouchers() {
  const ctx=useContext(Context)
  console.log(ctx.adminCurrentUserData.Vouchers)
  return (
    <div className="shadow-md shadow-gray-700 w-[60%] h-[250px]  bg-white m-2 rounded-lg">
      <p className=" py-2 font-bold text-2xl text-center  rounded-t-lg text-white bg-purple-500">
       shivam's Vouchers{" "}
      </p>{" "}
      <div className="w-[100%]">
        <div className="mx-2 bg-white text-black flex h-[40px] font-bold items-center">
          <p className="w-[20%] px-1">v.no</p>
          <p className="w-[20%] px-1">status</p>
          <p className="w-[25%] px-1">trip</p>
          <p className="w-[20%] px-1">Date</p>
          <p className="w-[15%] px-1 text-center"></p>
        </div>
      </div>
      <div className="w-[100%] h-[calc(250px-120px)] overflow-y-auto">
        {ctx.adminCurrentUserData.Vouchers?.map((current=>{
          return  <div className="mx-2 bg-white text-black flex py-1 text-[.8rem] font-semibold">
          <p className="w-[20%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
           {current.id}
          </p>
          <p className="w-[20%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {current.statusType}
          </p>
          <p className="w-[25%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {current.tourLocation}
          </p>
          <p className="w-[20%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {current.tourDate}
          </p>
          <div className="w-[15%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis ">
            <p className="bg-blue-300 text-white font-bold text-center rounded hover:bg-blue-500">
              {" "}
              View
            </p>
          </div>
        </div>
        }))}
        
       
      </div>
    </div>
  );
}

export default UsersAllVouchers;
