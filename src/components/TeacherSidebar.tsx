import React from "react";
import { MdHome, MdNotifications } from "react-icons/md";
import { FaListAlt, FaUser } from "react-icons/fa";

const TeacherSidebar = () => {
  return (
    <div className="h-screen hidden sm:block">
      <div className="w-full md:w-48 h-screen bg-green-400 flex flex-col items-start justify-between px-2 py-10 gap-4 rounded-tr-2xl rounded-br-2xl">
        <div className="w-full hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm flex items-center gap-3 tooltip tooltip-right tooltip-info" data-tip='Home'>
          <MdHome size={27} />
          <p className="text-sm font-semibold hidden md:block">Home</p>
        </div>
        <div className="w-full hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm flex items-center justify-center md:justify-start gap-3 tooltip tooltip-right tooltip-info" data-tip='Home'>
          <FaListAlt size={20} />
          <p className="text-sm py-0.5 font-semibold hidden md:block">Exams</p>
        </div>
        <div className="w-full hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm flex items-center gap-3 tooltip tooltip-right tooltip-info" data-tip='Home'>
          <MdNotifications size={27} />
          <p className="text-sm py-0.5 font-semibold hidden md:block">Notification</p>
        </div>
        <div className="w-full hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm flex items-center gap-3 tooltip tooltip-right tooltip-info" data-tip='Home'>
          <FaUser size={24} />
          <p className="text-sm py-0.5 font-semibold hidden md:block">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherSidebar;
