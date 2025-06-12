import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaSatelliteDish,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCheck,
  FaCarAlt,
} from "react-icons/fa";
import backgroundImage from "../../../public/assets/L2.jpg";
import trackingIllustration from "./../../../public/assets/Location.jpg";

const LocationTracking = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Shorter duration for smoother mobile performance
      once: true, // Trigger animations only once to avoid re-triggering on mobile
      offset: 50, // Smaller offset for mobile to trigger animations earlier
      disable: 'mobile', // Disable animations on mobile (below 640px) if issues persist
      easing: 'ease-out',
    });

    // Refresh AOS on window resize to handle responsive layout changes
    window.addEventListener('resize', AOS.refresh);
    return () => window.removeEventListener('resize', AOS.refresh);
  }, []);

  const featureCards = [
    {
      icon: <FaSatelliteDish />,
      title: "GPS Spoofer Detection",
      desc: "Get notified when a GPS spoofer is detected.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Date/Time Manipulation",
      desc: "App stops working if it detects date or time are changed.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "GPS On/Off Notifications",
      desc: "Get instant notification if GPS is disabled on any device.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Alerts",
      desc: "Get notified if suspicious behavior is detected on the device.",
    },
  ];

  return (
    <div>
      {/* Section 1 - Hero with Background */}
      <section
        className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-24 bg-cover bg-center bg-no-repeat min-h-[70vh] sm:min-h-[80vh] lg:min-h-[100vh] bg-gray-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-100 bg-black/50 z-0"></div>
        <div className="relative z-10 w-full lg:w-1/2 max-w-xl space-y-4 sm:space-y-6">
          <h2 className="text-xs sm:text-sm font-bold uppercase text-blue-300">
            LOCATION TRACKING
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Location tracking that eliminates doubt
          </h1>
          <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-white">
            <li>
              <FaCheck className="inline-block mr-2 text-blue-300" /> Real-time
              Location Monitoring
            </li>
            <li>
              <FaCheck className="inline-block mr-2 text-blue-300" /> 95%
              Accurate Distance Calculation
            </li>
            <li>
              <FaCheck className="inline-block mr-2 text-blue-300" /> Create
              Geofence Alerts
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-4 sm:mt-6">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all transform hover:scale-105">
              Get Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 - Feature Cards */}
      <section className="bg-gray-100 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
          We make sure that location tracking is reliable and accurate.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="w-full h-[250px] sm:h-[300px] bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center space-y-4"
            >
              <div className="text-blue-900 text-4xl sm:text-5xl">{card.icon}</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">{card.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Team Management */}
      <section
        className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[100vh] bg-gray-100 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24 gap-8 sm:gap-12"
      >
        <div
          className="w-full lg:w-1/2 space-y-4 sm:space-y-6 order-2 lg:order-1"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Enhance Team Management with Location Intelligence
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Gain deeper insights into your team's activities and improve operational efficiency.
          </p>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col items-start">
              <div className="text-blue-900 text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Monitor Real-time Employee Location
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                With unparalleled accuracy and reliability, you can monitor the location and movement of your field team.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-blue-900 text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                <FaCarAlt />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Increase Accountability with Geofences
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Get real-time geofence boundary notifications when a team member enters or exits a geofence.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 order-1 lg:order-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <img
            src={trackingIllustration}
            alt="Tracking Illustration"
            className="w-full h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] object-contain rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default LocationTracking;