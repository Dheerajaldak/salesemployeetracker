import React, { useState } from "react";

const sidebarItems = [
  {
    label: "Attendance Selfie",
    icon: "🌀",
    description: "Take a selfie to mark your attendance using your mobile device.",
  },
  {
    label: "Capture attendance location",
    icon: "📅",
    description: "Capture the location of the employee when they punch in or out.",
  },
  {
    label: "Restrict Attendance Marking",
    icon: "📍",
    description: "Control when and where attendance can be marked for better compliance.",
  },
  {
    label: "Works in Zero Connectivity",
    icon: "⚡",
    description: "Mark attendance even without an active internet connection.",
  },
  {
    label: "Time Based Auto Attendance",
    icon: "⏱",
    description: "Automatically record attendance based on scheduled time slots.",
  },
  {
    label: "Location based auto attendance",
    icon: "📸",
    description: "Automatically mark attendance when entering predefined locations.",
  },
];

export default function HRManagementUI() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside
        className={`lg:w-64 w-full bg-white border-r border-gray-200 p-3 transition-all ease-in-out duration-300 ${
          sidebarOpen ? "block" : "lg:block hidden"
        }`}
      >
        <button
          className="lg:hidden text-gray-600 p-2 mb-6"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close Menu" : "Open Menu"}
        </button>
        <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-2rem)] pr-2">
          {sidebarItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-blue-50 transition"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span className="text-md">&rarr;</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 flex flex-col items-center justify-start">
        <h1 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Experience the Future of Attendance & Leave Management
        </h1>

        {hoveredItem ? (
          <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 border border-gray-100 transition duration-300 ease-in-out">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{hoveredItem.icon}</div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{hoveredItem.label}</h2>
                <p className="text-gray-700 text-base">{hoveredItem.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-xl bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-600">
            <ul className="space-y-2 text-base leading-6">
              <li>✓ Real-time Attendance Location</li>
              <li>✓ Live Headcount at Sales Tracking</li>
              <li>✓ Track Working Hours</li>
              <li>✓ Custom Leave Management</li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
