import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

function CompanyStats() {
  const globeEl = useRef();
  const [pointsData, setPointsData] = useState([]);

  useEffect(() => {
    const sampleSalesData = [
      { lat: 40.7128, lng: -74.0060, size: 0.3 },
      { lat: 34.0522, lng: -118.2437, size: 0.25 },
      { lat: 51.5074, lng: -0.1278, size: 0.35 },
      { lat: 35.6895, lng: 139.6917, size: 0.3 },
      { lat: -33.8688, lng: 151.2093, size: 0.2 },
    ];
    setPointsData(sampleSalesData);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
    }
  }, []);

  return (
    <div className="bg-black px-6 text-white font-poppins  ">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 md:gap-10 items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Driven by a dedicated team of experts across regions, we deliver innovative sales tracking solutions that help businesses grow smarter, sell faster, and stay ahead in competitive markets.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 md:gap-y-8 md:gap-x-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">210+</h2>
              <p className="text-sm md:text-base text-gray-400">Businesses boosted with insights</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500">60+</h2>
              <p className="text-sm md:text-base text-gray-400">Smart sales dashboards deployed</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">10K</h2>
              <p className="text-sm md:text-base text-gray-400">Users relying on our platform</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500">2,000+</h2>
              <p className="text-sm md:text-base text-gray-400">Automated reports generated monthly</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">17</h2>
              <p className="text-sm md:text-base text-gray-400">Industries served with excellence</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500">5.13Mn</h2>
              <p className="text-sm md:text-base text-gray-400">Sales records tracked seamlessly</p>
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[200px] md:h-[300px] lg:h-[400px] ">
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)"
            width={Math.min(400, window.innerWidth * 0.7)} // Responsive width
            height={Math.min(400, window.innerWidth * 0.7)} // Responsive height
            showAtmosphere={true}
            atmosphereColor="#3a9efd"
            atmosphereAltitude={0.25}
            pointsData={pointsData}
            pointLat="lat"
            pointLng="lng"
            pointAltitude={0.01}
            pointRadius="size"
            pointColor={() => 'orange'}
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyStats;