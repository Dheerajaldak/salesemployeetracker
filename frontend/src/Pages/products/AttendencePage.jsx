import React from 'react';
import HRManagementUI from '../../components/SidebarItems';
import Mobileview2 from "../assets/AapInterface.jpg";

const AttendancePage = () => {
  return (
    <>
      {/* First Section: Left Content & Right Image */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-10 sm:px-6 lg:px-20 bg-gray-100 ">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 max-w-2xl space-y-5 mt-8 lg:mt-0 text-center lg:text-left">
          <h2 className="text-xs sm:text-sm font-semibold text-blue-900 uppercase">
            Best Attendance Management System
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Sales Tracking Makes Attendance Easy
          </h1>
          <ul className="space-y-2 text-base sm:text-lg text-gray-700 mt-4">
            <li>✓ Real-time Attendance Location</li>
            <li>✓ Live Headcount at Site</li>
            <li>✓ Track Working Hours</li>
            <li>✓ Custom Leave Management</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition">
              Get Free Trial
            </button>
           
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
          <img
            src={Mobileview2}
            alt="App Interface Mockup"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-[500px] rounded-4xl shadow-md"
          />
        </div>
      </section>

      {/* Second Section: HR Management UI */}
      <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <HRManagementUI />
        </div>
      </section>
    </>
  );
};

export default AttendancePage;
