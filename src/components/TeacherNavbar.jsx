import React from "react";
import { MdHome, MdNotifications } from "react-icons/md";
import { FaListAlt, FaUser } from "react-icons/fa";

const TeacherNavbar = () => {
  return (
    <div className="w-full fixed bottom-0 flex items-center justify-center sm:hidden">
      <div className="w-full bg-green-400 flex items-center justify-between px-6 gap-4 rounded-tr-2xl rounded-tl-2xl">
        <div className="hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-1.5 rounded-sm flex flex-col items-center">
          <MdHome size={27} />
          <p className="text-sm py-0.5 font-semibold">Home</p>
        </div>
        <div className="hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm flex flex-col items-center justify-center">
          <FaListAlt size={20} />
          <p className="text-sm py-0.5 font-semibold">Exams</p>
        </div>
        <div className="hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm flex flex-col items-center justify-center">
          <MdNotifications size={27} />
          <p className="text-sm py-0.5 font-semibold">Notification</p>
        </div>
        <div className="hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm flex flex-col items-center justify-center">
          <FaUser size={24} />
          <p className="text-sm py-0.5 font-semibold">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherNavbar;
