import React from "react";
import { MdHome, MdNotifications } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";

const TeacherSidebar = () => {
  return (
    <div className="h-screen absolute flex flex-col items-center justify-center">
      <div className="bg-green-400 py-6 px-1 flex flex-col gap-4 rounded-tr-2xl rounded-br-2xl">
        <div className="hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm">
          <MdHome size={27} />
          <p className="hidden sm:block">Home</p>
        </div>
        <div className="hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm">
          <MdNotifications size={26} />
          <p className="hidden sm:block">Notifications</p>
        </div>
        <div className="hover:bg-gray-500/50 active:bg-gray-500/50 cursor-pointer transition duration-300 delay-75 p-2 rounded-sm flex items-center justify-center">
          <FaListAlt size={20} />
          <p className="hidden sm:block">Create Exam</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherSidebar;
