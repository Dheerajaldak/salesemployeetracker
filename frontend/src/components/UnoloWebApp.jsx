import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Briefcase,
    Play,
} from 'lucide-react';

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const fadeLeftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const fadeRightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const UnoloWebApp = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center px-4 ">
            {/* Header Section */}
            <header className="text-center w-full pt-10 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    FIELD FORCE AUTOMATION
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                    A single platform to manage your Field Sales & Service Operations.
                </p>
            </header>

            {/* Top Stroke Animation */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
                className="w-full my-6"
            >
                <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 1000 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full"
                >
                    <path
                        d="M0 70 H200 Q220 70 240 50 T280 30 H400 Q420 30 440 50 T480 70 H700 Q720 70 740 50 T780 30 H1000"
                        stroke="#C2DDF9"
                        strokeWidth="3"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            from="0,1000"
                            to="1000,0"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>
            </motion.div>

            {/* Main Content Section */}
            <main className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12 py-10">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 space-y-10">
                    {[{
                        icon: <Play className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />,
                        title: "1. Start FREE Trial",
                        desc: "Click on the below button to create your free account.",
                        animation: fadeUpVariants
                    }, {
                        icon: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />,
                        title: "2. Add Executives",
                        desc: "Add your field employees in your Unolo account.",
                        animation: fadeLeftVariants
                    }, {
                        icon: <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500" />,
                        title: "3. Start Managing",
                        desc: "Start tracking and managing your field staff.",
                        animation: fadeRightVariants
                    }].map(({ icon, title, desc, animation }, idx) => (
                        <motion.div
                            key={idx}
                            variants={animation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-start"
                        >
                            <div className="mr-5">{icon}</div>
                            <div>
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">{title}</h2>
                                <p className="text-gray-600 text-md sm:text-lg">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column: Phone UI */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative w-[280px] sm:w-[320px] h-[500px] sm:h-[550px] bg-gray-200 rounded-xl shadow-2xl border border-gray-300"
                    >
                        <div className="absolute inset-4 bg-white rounded-lg p-4 flex flex-col h-full">
                            <div className="flex justify-between text-sm sm:text-base font-medium mb-4">
                                <span>Expense</span>
                                <span>Add Expense</span>
                            </div>
                            <div className="flex-grow space-y-3 overflow-y-auto">
                                {[
                                    { name: "Meeting", amount: 200 },
                                    { name: "Maintenance", amount: 472 },
                                    { name: "Conveyance", amount: 300 },
                                    { name: "Stamping", amount: 585 },
                                    { name: "Fuel", amount: 743 },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center py-1">
                                        <span className="mr-3 font-semibold text-md">{index + 1}.</span>
                                        <div className="flex justify-between w-full bg-gray-100 p-2 sm:p-3 rounded-md text-sm sm:text-base">
                                            <span>{item.name}</span>
                                            <span className="font-medium">₹{item.amount}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm sm:text-lg font-medium">
                                    <span>Total:</span>
                                    <span className="font-bold">₹2300.0</span>
                                </div>
                                <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 rounded text-sm sm:text-base font-semibold">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Bottom Stroke Animation */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
                className="w-full mt-10"
            >
                <svg
                    width="100%"
                    height="100"
                    viewBox="0 0 1000 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full"
                >
                    <path
                        d="M0 70 H200 Q220 70 240 50 T280 30 H400 Q420 30 440 50 T480 70 H700 Q720 70 740 50 T780 30 H1000"
                        stroke="#C2DDF9"
                        strokeWidth="3"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            from="0,1000"
                            to="1000,0"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>
            </motion.div>
        </div>
    );
};

export default UnoloWebApp;
