import React, { useContext, useState } from "react";
import Context from "../store/Context";
import VoucherViewer from "./VoucherViewer";

function AdminPEndingVouchers(props) {
  const [open, setOpen] = useState(false);
  const [Id, setId] = useState(null);
  const ctx = useContext(Context);

  // console.log(id);
  return (
    <div className="shadow-md shadow-gray-700 w-[60%]  min-h-[250px] h-[40vh]  bg-white m-2 rounded-lg">
      <VoucherViewer
        close={() => {
          setOpen(!open);
        }}
        voucherId={Id}
        open={open}
      ></VoucherViewer>{" "}
      <p className=" py-2 font-bold text-2xl text-center rounded-t-lg text-white bg-gradient-to-r from-[#dd2476] to-[#ff7e5f] ">
        Pending Vouchers{" "}
      </p>{" "}
      <div className="w-[100%]">
        <div className="mx-2 bg-white text-black flex h-[40px] font-bold items-center">
          <p className="w-[13%] px-1">v.no</p>
          <p className="w-[27%] px-1">name</p>
          <p className="w-[25%] px-1">trip</p>
          <p className="w-[20%] px-1">Date</p>
          <p className="w-[15%] px-1 text-center"></p>
        </div>
      </div>
      <div className="w-[100%]  h-[calc(40vh-90px)] min-h-[calc(250px-90px)] overflow-y-auto">
        {props.pending.map((current) => {
          return (
            <div className="mx-2 bg-white text-black flex py-1 text-[.8rem] font-semibold">
              <p className="w-[13%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                {current.id}
              </p>
              <p className="w-[27%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                {current.user.firstName}
              </p>
              <p className="w-[25%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                {current.tourLocation}
              </p>
              <p className="w-[20%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                {current.tourDate}
              </p>
              <div className="w-[15%] px-1 overflow-hidden whitespace-nowrap overflow-ellipsis ">
                <p
                  className="bg-blue-300 text-white font-bold text-center rounded hover:bg-blue-500"
                  onClick={() => {
                    setOpen(true);
                    setId(current.id);
                  }}
                >
                  View
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminPEndingVouchers;
