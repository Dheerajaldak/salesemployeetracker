import React from 'react';
import CountUp from 'react-countup';

const SalesPlans = () => {
  const plans = [
    {
      title: 'Starter Plan',
      price: 10,
      originalPrice: null,
      features: [
        'Basic Sales Dashboard',
        'Export to Excel',
        'Email Support',
        'Single User Access',
      ],
      buttonText: 'Choose Starter',
      buttonColor: 'bg-white text-blue-500 hover:bg-gray-100',
    },
    {
      title: 'Growth Plan',
      price:20,
      originalPrice: 49,
      discount: '20% OFF',
      discountOfferText: 'Limited Time Offer',
      features: [
        'Advanced Analytics',
        'Export to PDF & Excel',
        'Priority Email Support',
        'Team Collaboration',
      ],
      buttonText: 'Choose Growth',
      buttonColor: 'bg-blue-500 text-white hover:bg-red-600',
      isPopular: true,
    },
    {
      title: 'Enterprise Plan',
      price: 200,
      originalPrice: null,
      features: [
        'Custom Integrations',
        'Full Analytics Suite',
        'Dedicated Account Manager',
        'Unlimited Users',
      ],
      buttonText: 'Contact Sales',
      buttonColor: 'bg-white text-blue-500 hover:bg-gray-100',
    },
  ];

  return (
    <div className="font-[Poppins]">
      <div className="py-20 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-5xl font-bold text-black mb-4">Sales Tracker Plans</h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            Choose a plan that fits your sales team's needs and scale your business efficiently.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-5 font-medium rounded-lg shadow-lg bg-gray-950 transition-transform duration-300 min-h-[500px] ${
                  plan.isPopular ? 'md:scale-108 md:z-10 border-2 border-blue-500' : 'md:scale-95'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-br-lg">
                    {plan.discount}
                  </div>
                )}
                {plan.isPopular && plan.discountOfferText && (
                  <p className="absolute top-1 right-6 text-white text-[0.75rem] font-semibold">
                    {plan.discountOfferText}
                  </p>
                )}

                <h3 className="text-3xl font-semibold text-white mb-6">{plan.title}</h3>

                <div className="flex items-baseline mb-3">
                  <span className="text-4xl font-bold text-white">
                    <span className="text-base font-medium text-gray-500 mr-1">$</span>
                    <CountUp end={plan.price} duration={1.5} />
                  </span>
                  <span className="ml-2 text-xl text-gray-400">/month</span>
                </div>

                {plan.originalPrice && (
                  <p className="text-sm text-gray-400 line-through mb-4">${plan.originalPrice}</p>
                )}

                <ul className="flex-1 space-y-3 mb-6">
                  {plan.features?.map((feature, i) => (
                    <li key={i} className="flex items-start text-md text-gray-300 leading-tight">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button
                    className={`w-full py-3 rounded-md font-semibold text-lg focus:outline-none ${plan.buttonColor}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400 text-center">* All prices are in GBP. Taxes may apply.</p>
        </div>
      </div>

      {/* New Section */}
      <div className="py-16 bg-gray-300 text-black text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Supercharge Your Sales?</h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            Unlock the full potential of your sales team with our powerful tracking and analytics features.
            Choose the plan that's right for you and start seeing results today!
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md text-xl focus:outline-none">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesPlans;