import React from "react";

const Card = ({ type, title, description, expandable }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 rounded-full">
          {type}
        </span>
        <h3 className="mt-3 text-xl font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="mt-2 text-gray-600">{description}</p>
        )}
        {expandable && (
          <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
            Expand
          </button>
        )}
      </div>
    </div>
  );
};

const Testimonals = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Perspective Card */}
        <div className="lg:col-span-2">
          <Card
            type="PERSPECTIVE"
            title="Navigating the new tariff landscape and its economic impact"
            description="U.S. tariffs have introduced unprecedented uncertainty for executives to adapt to. In this perspective, we outline four pillars of resilience that enable enterprise resilience and how they can help you navigate the new tariff landscape."
            expandable={true}
          />
        </div>
        
        {/* Case Study Card */}
        <Card
          type="CASE STUDY"
          title="AI personalities, real connection"
        />
        
        {/* Research Report Card */}
        <Card
          type="RESEARCH REPORT"
          title="Blueprint for success"
        />
        
        {/* Case Study Card */}
        <Card
          type="CASE STUDY"
          title="Uber hails a new era for advertising"
        />
      </div>
    </div>
  );
};

export default Testimonals;