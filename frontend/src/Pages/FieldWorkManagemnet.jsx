import React from 'react';
import {
    MapPin,
    Clock,
    Users,
    Target,
    Briefcase,
    ShoppingCart,
} from 'lucide-react';

const SalesTrackerCards = () => {
    // Simple 3D effect (using CSS)
    const cardStyle =
        "bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl";

    const getIcon = (title) => {
        switch (title) {
            case 'Location Tracking':
                return <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />;
            case 'Attendance':
                return <Clock className="h-12 w-12 mx-auto mb-4 text-blue-600" />;
            case 'Client Visits':
                return <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />;
            case 'Targets':
                return <Target className="h-12 w-12 mx-auto mb-4 text-blue-600" />;
            case 'Expense Management':
                return <Briefcase className="h-12 w-12 mx-auto mb-4 text-blue-600" />;
            case 'Order Booking':
                return <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-blue-600" />;
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto p-8">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">
                    Managing a field workforce can be a nightmare, but it doesn't have to be.
                </h2>
                <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    With features such as GPS employee tracking, sales tracking, location-based attendance, geo-verified client visits, and intuitive dashboards, Unolo fully automates your workflow in just 10 minutes.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {[
                    { title: 'Location Tracking', description: 'Check the real-time location of your field employees.' },
                    { title: 'Attendance', description: 'Attendance marking with location & track working hours.' },
                    { title: 'Client Visits', description: 'Get Geo-verified client visits, photos & forms.' },
                    { title: 'Targets', description: 'Assign team targets & monitor progress seamlessly.' },
                    { title: 'Expense Management', description: 'Validate, process and digitize your expenses.' },
                    { title: 'Order Booking', description: 'Book orders directly through our application.' }
                ].map(({ title, description }, index) => (
                    <div key={index} className={cardStyle}>
                        <h3 className="text-xl font-semibold mb-3">{title}</h3>
                        <p className="text-gray-600 mb-4">{description}</p>
                        {getIcon(title)}
                        <button className="inline-block px-4 py-2 text-white font-medium bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-all">
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesTrackerCards;
