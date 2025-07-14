import React from "react";
import TeacherDashboard from "./page";
import TeacherSidebar from "@/components/TeacherSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex gap-2">
      <div className="w-16">
        <TeacherSidebar />
      </div>
      <TeacherDashboard />
    </div>
  );
};

export default DashboardLayout;
