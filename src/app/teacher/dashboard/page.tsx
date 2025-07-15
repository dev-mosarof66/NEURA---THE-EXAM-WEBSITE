import React from "react";

const dashboard = () => {
  return (
    <div className="w-full h-screen bg-rich_black-400 p-8">
      {/* greetings  */}
      <div className="border-b border-b-white/50 pb-4 ">
        <h1 className="text-silver_lake_blue-800 font-semibold text-2xl sm:text-3xl">
          Good Morning,
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        <div className="w-[90%] mx-auto max-w-xl flex flex-col items-center justify-center bg-oxford_blue-700 py-10 gap-4 rounded-sm">
          <h1 className="text-xl sm:text-2xl font-semibold text-oxford_blue-100 text-center">
            No. of exams created
          </h1>
          <p className="text-black font-semibold text-2xl sm:text-3xl">10</p>
        </div>
        <div className="w-[90%] mx-auto max-w-xl flex flex-col items-center justify-center bg-oxford_blue-700 py-10 gap-4 rounded-sm">
          <h1 className="text-xl sm:text-2xl font-semibold text-oxford_blue-100 text-center">
            No. of students enrolled
          </h1>
          <p className="text-black font-semibold text-2xl sm:text-3xl">10</p>
        </div>
        <div className="w-[90%] mx-auto max-w-xl flex flex-col items-center justify-center bg-oxford_blue-700 py-10 gap-4 rounded-sm">
          <h1 className="text-xl sm:text-2xl font-semibold text-oxford_blue-100 text-center">
            No. of exams created
          </h1>
          <p className="text-black font-semibold text-2xl sm:text-3xl">10</p>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
