import React from "react";
import Navbar from "./Navbar";
import Foot from "./Footer";
import bg from "../assets/bg.jpg";
import tec from "../assets/tecture.png";

const Imp = () => {
  const dates = [
    { title: "Paper Submission", date: "15 April 2025" },
    { title: "Acceptance Notification", date: "30 April 2025" },
    { title: "Author Registration", date: "2 May 2025" },
    { title: "Conference", date: "9-10th May 2025" },
  ];

  return (
    <div className="all" style={{backgroundImage: `url(${tec})` , backgroundSize: 'cover' }}>
      <Navbar/>
     
    <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-5">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Important Dates</h2>
        <p className="text-gray-600 text-lg">Mark your calendars and don't miss these deadlines!</p>
      </div>

      <div className="mt-8 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        {dates.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 px-4 border-b last:border-none hover:bg-gray-100 rounded transition"
          >
            <span className="text-lg font-semibold text-gray-700">{item.title}:</span>
            <span className="text-lg text-gray-600">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
    <Foot/>
    </div>
  );

};

export default Imp;
