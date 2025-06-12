import React from 'react';
import { FaMapMarkedAlt, FaRoute, FaCamera, FaPen, FaCheck } from 'react-icons/fa';
import bestImage from '../assets/Geo_Client.png';
import LaptopImage from '../assets/Laptop_image.png';
import lapImage from '../assets/Unolo2.jpeg';

const TaskManagement = () => {
  return (
    <>
      {/* Section 1 - Task Management Features */}
      <section className="py-12 sm:py-16 lg:py-24 text-slate-800 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12 sm:mb-16">
            SalezTracker makes Tasks Management Effortless!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {[
              { icon: FaMapMarkedAlt, title: "Confirm Client Visits by your Field Executives", desc: "Unolo ensures your field team is at the client location before allowing them to start the task." },
              { icon: FaRoute, title: "Create & Assign Beat Plans", desc: "Design & assign routes to your field executives on Unolo, then track their progress & verify completion via the dashboard." },
              { icon: FaCamera, title: "Collect Geo-tagged Photos", desc: "Unolo generates geo-tagged photos directly with time and location embedded into them." },
              { icon: FaPen, title: "Collect Custom Data", desc: "Design your own forms in Unolo and collect data in the way you want." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-start space-y-4 p-6 bg-white border border-slate-200 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-300">
                <div className="flex items-center gap-3">
                  <item.icon className="text-3xl sm:text-4xl text-blue-950" />
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-950">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Geo Verification */}
      <section className="py-12 sm:py-16 lg:py-24 text-slate-800 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={bestImage}
              alt="Geo Verification"
              className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full rounded-xl shadow-xl border border-gray-200 object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Want to make sure your field executives are actually visiting clients?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium">
              Unolo uses geo-verification to ensure they are at the client location.
            </p>
            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2">Geo-tag your clients</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  With multiple ways to geo-tag your clients, Unolo makes it easy to make sure you know the right location of your client.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2">Start Task only at client location</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Unolo automatically makes sure that the field executive is in range of the client before allowing them to start the task.
                </p>
              </div>
            </div>
            <div className="pt-4 sm:pt-6">
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/30 transform transition-all duration-300 hover:scale-105 text-center">
                Get Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Laptop Image Background */}
     <section
        className="w-full min-h-screen flex items-center justify-center bg-no-repeat bg-fixed bg-gray-100"
        style={{
          backgroundImage: `url(${LaptopImage})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full px-10 sm:px-16 lg:px-24 text-gray-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] text-center">
          <h2 className="text-5xl font-bold leading-tight text-gray-200 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.4)]">
            Plan and Upload Beat Plans with Precision
          </h2>
          <div className="mx-auto max-w-xl mt-4">
            <p className="text-xl font-bold leading-relaxed text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              Unolo makes it simple to see where your clients are and plan out your optimal beat plan for maximum efficiency.
            </p>
            <h3 className="text-2xl font-bold text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] mt-8">
              Monitor Results Effectively
            </h3>
            {/* <p className="text-lg font-bold leading-relaxed text-gray-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)] mt-2">
              Monitor adherence to beat plan through our intuitive dashboards and comprehensive reports.
            </p> */}
          </div>
        </div>
      </section>

      {/* Section 4 - Custom Forms */}
      <section className="py-12 sm:py-16 lg:py-24 text-slate-800 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={lapImage}
              alt="Form Design"
              className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full rounded-xl shadow-xl border border-slate-200 object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Make on-field data collection and assessment a breeze.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Create customisable forms and quizzes, making on-field data collection simple and effective.
            </p>
            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2">Design Powerful Forms</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Multiple question types, sections, validation and even customisable logic—covering 99% of Google Forms' power.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2">Make Informed Decisions</h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Instantly see or download data collected from the field in your admin panel.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2">Track Quiz Performance</h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Assess performance in real time with instant scoring and results.
                </p>
              </div>
            </div>
            <div className="pt-4 sm:pt-6">
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-lg hover:shadow-blue-500/30 transform transition-all duration-300 hover:scale-105 text-center">
                Get Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskManagement;