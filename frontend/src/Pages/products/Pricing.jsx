import React from "react";
import Mobileview1 from "../assets/Mobieview.png"; // Removed '../assets/'
import TaskManagement from "./TaskManagement"; // Removed './'

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Sample2 = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 overflow-hidden px-4 py-10 relative">
        {/* Diagonal borders (fixed-looking, behind content) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute w-20 bg-blue-950"
            style={{
              height: "550px",
              top: "-120px",
              left: "6px",
              borderRadius: "10px",
              // boxShadow: "0 6px 14px rgba(0, 0, 0, 0.3)",
              transform: "rotate(38deg)",
            }}
          />
          <div
            className="absolute w-20 bg-blue-950"
            style={{
              height: "550px",
              bottom: "-70px",
              right: "10px",
              borderRadius: "10px",
              // boxShadow: "0 6px 14px rgba(0, 0, 0, 0.3)",
              transform: "rotate(38deg)",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-4 relative z-10 pt-15 pb-10 overflow-hidden">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="rounded-xl shadow-2xl overflow-hidden">
              <img
                src={Mobileview1}
                alt="Mobile View 1"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  maxHeight: "500px",
                }} // Make image responsive
              />
            </div>
          </div>

          {/* Right: Text */}
          <div
            className={cn(
              "w-full md:w-1/2 flex flex-col items-start space-y-6 text-left",
              "px-2 sm:px-4 md:ml-[-40px]"
            )}
          >
            <h1 className="font-bold mt-25 text-xl sm:text-xl md:text-4xl text-blue-950  leading-tight ">
              5 SMART WAYS TO USE THE BEST
            </h1>

            <h2
              className="font-bold mb-5 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl  "
              style={{ maxWidth: "90vw" }}
            >
              TASK MANAGEMENT
            </h2>
            <h2 className="font-bold  mb-6 text-lg sm:text-2xl md:text-4xl lg:text-5xl  text-center">
              Apps
            </h2>
          </div>
        </div>
      </div>
      <TaskManagement />
    </>
  );
};

export default Sample2;
