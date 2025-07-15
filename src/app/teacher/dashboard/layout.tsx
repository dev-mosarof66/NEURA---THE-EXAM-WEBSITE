import React from "react";
import TeacherDashboard from "./page";
import TeacherSidebar from "@/components/TeacherSidebar";
import TeacherNavbar from "@/components/TeacherNavbar";

const DashboardLayout = () => {
  return (
    <div className="w-full h-screen bg-rich_black-400">
      <div className="grid grid-cols-1 sm:hidden">
        <TeacherNavbar />
        <TeacherDashboard />
      </div>
      <div className="hidden sm:flex">
        <TeacherSidebar />
        <TeacherDashboard />
      </div>
    </div>
  );
};

export default DashboardLayout;
