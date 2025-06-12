import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const ShuffleHero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-evenly px-4 md:px-8 lg:px-16 py-12 bg-gray-100 gap-8">
      {/* Section Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight text-center">
        Sales Performance Dashboard
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-5">
        {/* Left Text */}
        <div className="flex-1  space-y-6 text-center md:text-left  ">
          <span className="text-sm text-blue-900 font-semibold uppercase tracking-wide ">
            Real-Time Insights That Drive Growth
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Visualize, Analyze, and Accelerate <br /> Your Sales Performance
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
            Empower your team with live data dashboards, region-wise tracking, and KPIs that help make
            better decisions. Our sales tracker simplifies the path from insight to action.
          </p>
          <button
            onClick={() => navigate("/map")}
            className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition-all"
          >
            View Sales Map
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="flex-1 w-full max-h-[600px] aspect-square rounded-2xl shadow-lg overflow-hidden">
          <ShuffleGrid />
        </div>
      </div>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return [...array];
};

const squareData = [
  { id: 1, src: "https://cdn.pixabay.com/photo/2019/04/24/14/03/map-4152197_1280.jpg" },
  { id: 2, src: "https://cdn.pixabay.com/photo/2020/02/18/11/02/map-4859139_1280.png" },
  { id: 3, src: "https://cdn.pixabay.com/photo/2015/09/05/21/13/analytics-925379_1280.jpg" },
  { id: 4, src: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=600&auto=format&fit=crop&q=60" },
  { id: 5, src: "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?w=600&auto=format&fit=crop&q=60" },
  { id: 6, src: "https://images.unsplash.com/photo-1625217527288-93919c99650a?w=600&auto=format&fit=crop&q=60" },
  { id: 7, src: "https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?w=600&auto=format&fit=crop&q=60" },
  { id: 8, src: "https://images.unsplash.com/photo-1610985725707-bb0766bf123b?w=600&auto=format&fit=crop&q=60" },
  { id: 9, src: "https://plus.unsplash.com/premium_photo-1681487829842-2aeff98f8b63?w=600&auto=format&fit=crop&q=60" },
  { id: 10, src: "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg" },
  { id: 11, src: "https://plus.unsplash.com/premium_photo-1681487077388-5a2c641a1e21?w=600&auto=format&fit=crop&q=60" },
  { id: 12, src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60" },
  { id: 13, src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&auto=format&fit=crop&q=60" },
  { id: 14, src: "https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=600&auto=format&fit=crop&q=60" },
  { id: 15, src: "https://plus.unsplash.com/premium_photo-1661573729122-6619f62ef0ea?w=600&auto=format&fit=crop&q=60" },
  { id: 16, src: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?w=600&auto=format&fit=crop&q=60" },
];

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(shuffle(squareData));

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(shuffle(squareData));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-1">
      {squares.slice(0, 16).map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1 }}
          className="aspect-square bg-cover bg-center w-full"
          style={{
            backgroundImage: `url(${sq.src})`,
          }}
        />
      ))}
    </div>
  );
};

export default ShuffleHero;
