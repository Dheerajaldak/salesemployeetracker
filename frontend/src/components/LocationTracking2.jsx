import React from 'react';

const LocationTracking2 = () => {
  return (
    <div>
      {/* Section 1: Hover Reveal */}
      <section className="relative w-full h-screen overflow-hidden group">
        {/* Right Side Hover Trigger */}
        <div className="absolute top-0 right-0 w-1/2 h-full z-10 group-hover:pointer-events-none" />

        {/* Main Container */}
        <div className="flex w-full h-full transition-all duration-700 ease-in-out group-hover:flex">

          {/* Left Content (Text Section) */}
          <div className="w-0 group-hover:w-1/2 h-full bg-gray-100  text-black flex flex-col justify-center items-start p-12 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden relative">
            <h2 className="text-sm font-semibold text-blue-900 uppercase">
              LOCATION TRACKING
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight">
              Location tracking that eliminates doubt
            </h1>
            <ul className="space-y-3 text-lg mt-10 font-medium">
              <li>✓ Real-time Location Monitoring</li>
              <li>✓ 95% Accurate Distance Calculation</li>
              <li>✓ Create Geofence Alerts</li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105">
                Get Free Trial
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full group-hover:w-1/2 h-full transition-all duration-700 ease-in-out">
           <img
  src="https://images.pexels.com/photos/6169868/pexels-photo-6169868.jpeg?auto=compress&cs=tinysrgb&w=1200"
  alt="Tracking Illustration"
  className="w-full h-full object-cover"
/>

          </div>
        </div>
      </section>

      
    </div>
  );
};

export default LocationTracking2;