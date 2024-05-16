import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
function UserExpensesGraph() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  let pending = 1000;
  let rejected = 400;
  let accepted = 200;
  const data = {
    labels: ["Misc","travel","Food",  ],
    datasets: [
      {
        label: "amount",
        data: [rejected, pending, accepted],
        backgroundColor: [
          "rgba(255, 99, 132, 1.8)",

          "rgba(255, 206, 86,1.8)",
          "rgba(75, 192, 192, 1.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",

          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className=" w-[40%]  min-h-[250px] h-[40vh]  m-2 bg-white rounded-lg shadow-md shadow-gray-700 text-center ">
      <p className=" border-white  py-2 font-bold bg-purple-500 text-2xl rounded-t-lg">
        Expense Graph
      </p>
      <div className="w-[100%] h-[calc(40vh-110px)] min-h-[calc(250px-90px)] my-2">
        {" "}
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: false, // hide legend
              },
              tooltip: {
                enabled: true, // hide tooltip
              },
            },
            cutout: "70%",
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="text-black flex justify-between text-[.8rem] px-2 font-bold">
        <div className="flex justify-center">
          {" "}
          <span className="text-center">
            <VscDebugBreakpointLog className="w-[20px] h-[20px] text-green-500" />
          </span>
          Food
        </div>

        <div className="flex justify-center">
          {" "}
          <span className="text-center">
            <VscDebugBreakpointLog className="w-[20px] h-[20px] text-yellow-500" />
          </span>
         Travel
        </div>
        <div className="flex justify-center">
          {" "}
          <span className="text-center">
            <VscDebugBreakpointLog className="w-[20px] h-[20px] text-red-500" />
          </span>
          misc
        </div>
      </div>
    </div>
  );
}

export default UserExpensesGraph;
