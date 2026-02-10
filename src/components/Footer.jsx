import React from "react";
import { usePlanner } from "../store/usePlanner";

const Footer = () => {
  const { tasks } = usePlanner();
  const pendingCount = tasks.filter((task) => task.status === "pending").length;
  const inprogressCount = tasks.filter(
    (task) => task.status === "Inprogress",
  ).length;
  const completedCount = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  return (
    <footer className="w-full bg-linear-165 from-black to-rose-900 h-[60px] flex items-center">
      <div className="flex items-center justify-between px-6 text-white w-full">
        <p className="underline text-white/80 hover:text-white cursor-pointer font-medium">
          www.SpeeWork.co
        </p>
        <div className="flex items-center gap-6">
          <h1 className="font-medium text-white ">Total: {tasks.length}</h1>
          <h1 className="font-medium text-yellow-400 ">
            Pending: {pendingCount}
          </h1>
          <h1 className="font-medium text-blue-500 ">
            Inprogress: {inprogressCount}
          </h1>
          <h1 className="font-medium text-green-500 ">
            Completed: {completedCount}
          </h1>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
