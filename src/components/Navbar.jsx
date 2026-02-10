import React, { useEffect, useState } from "react";
import { DatePicker, Popconfirm } from "antd";
import { Plus, Delete } from "lucide-react";
import { usePlanner } from "../store/usePlanner";

const Navbar = ({ setOpen, setSelectedDate }) => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  const { Deletealltask } = usePlanner();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full bg-linear-165 from-rose-900 to-black h-[60px] flex items-center justify-between px-8">
      <div className="flex items-center ">
        <div>
          <span className="w-2 h-2 text-lg bg-[linear-gradient(335deg,_#ff9a9e,_#fad0c4,_hsl(5.3,_84.9317766673029%,_53.015459374014654%))] text-red-900 px-3 py-2.5 font-bold rounded-full">
            PL
          </span>
        </div>
        <p className="font-medium text-white text-lg">anner</p>
      </div>
      <div className="flex items-center gap-3">
        <h1 className="text-white text-xl font-semibold">{timer}</h1>
        <DatePicker
          onChange={(date) =>
            setSelectedDate(date ? date.format("YYYY-MM-DD") : null)
          }
        />
        <button
          onClick={() => setOpen(true)}
          className=" bg-gradient-to-br  !from-rose-600 !to-pink-500 text-white flex items-center text-sm gap-2 font-semibold px-3 py-2 rounded-lg transition-transform duration-300 hover:scale-110"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
        <Popconfirm
          title="do you want to delete all tasks"
          onConfirm={() => Deletealltask()}
        >
          <button className=" bg-red-600 text-white flex items-center text-sm gap-2 font-semibold px-3 py-2 rounded-lg transition-transform duration-300 hover:scale-110">
            <Delete className="w-4 h-4" />
            Delete Task
          </button>
        </Popconfirm>
        {/* <Button type="primary" className="!font-semibold" danger>
            Delete
          </Button> */}
      </div>
    </nav>
  );
};

export default Navbar;
