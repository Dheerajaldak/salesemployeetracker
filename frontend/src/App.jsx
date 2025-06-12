import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import Pricing from "./Pages/products/Pricing";
import Integrations from "./Pages/products/Integrations";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import FAQsPage from "./Pages/FAQsPage";
import Blog from "./Pages/products/Blog";
import Reports from "./Pages/Reports";
import Footer from "./components/Footer";
import LocationTracking from "./Pages/products/LocationTracking";
import AttendancePage from "./Pages/products/AttendencePage";
import Login from "./admin/Login";
import "./index.css";
import AdminDashboard from "./admin/AdminDashboard";

// Protected Route component
function ProtectedRoute({ children, token }) {
  return token ? children : <Navigate to="/admin/login" replace />;
}

function AppContent({ token, setToken }) {
  const location = useLocation();
  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      <div className={!hideLayout ? "pt-16 min-h-[80vh]" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/feature" element={<ProductsPage />} />
          <Route path="/feature/taskmanagement" element={<Pricing />} />
          <Route
            path="/feature/locationtracking"
            element={<LocationTracking />}
          />
          <Route path="/feature/target" element={<Integrations />} />
          <Route path="/feature/attendence" element={<AttendancePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<Reports />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login setToken={setToken} />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute token={token}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <ProtectedRoute token={token}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={<h2 className="text-center py-10">404 - Page Not Found</h2>}
          />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <BrowserRouter>
      <AppContent token={token} setToken={setToken} />
    </BrowserRouter>
  );
}

export default App;
