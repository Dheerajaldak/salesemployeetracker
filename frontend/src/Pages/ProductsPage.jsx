import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function ProductsPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Products</h1>
            <div className="mb-4">
                <Link to="/products/feature1" className="text-blue-600 hover:underline mr-4">Feature One</Link>
                <Link to="/products/feature2" className="text-blue-600 hover:underline mr-4">Feature Two</Link>
                <Link to="/products/pricing" className="text-blue-600 hover:underline mr-4">Pricing</Link>
                <Link to="/products/integrations" className="text-blue-600 hover:underline">Integrations</Link>
            </div>
            <Outlet /> {/* To render child routes */}
        </div>
    );
}

export default ProductsPage;