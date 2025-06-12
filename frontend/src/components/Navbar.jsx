import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBox,
  faChartLine,
  faEnvelope,
  faChevronDown,
  faBars,
  faTimes,
  faNewspaper,
  faInfoCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [featureDropdownOpen, setFeatureDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to detect route changes

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger when the pathname changes

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close mobile menu on link click
    setFeatureDropdownOpen(false); // Close feature dropdown if open
  };

  const navbarStyle = {
    backgroundColor: "white",
    transition: "all 0.3s ease-in-out",
    paddingTop: "1.2rem",
    paddingBottom: "1.2rem",
  };

  const mobileMenuVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <motion.nav
      key="navbar"
      className="fixed top-0 w-full z-50 shadow-md bg-white"
      style={navbarStyle}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-900 flex items-center space-x-2"
        >
          <img src="/assets/Group 25.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 items-center text-gray-900 font-medium">
          <Link to="/" className="hover:text-blue-950 flex items-center gap-2">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setFeatureDropdownOpen(true)}
            onMouseLeave={() => setFeatureDropdownOpen(false)}
          >
            <div className="hover:text-blue-950 flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon icon={faBox} />
              Features
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <AnimatePresence>
              {featureDropdownOpen && (
                <motion.div
                  className="absolute bg-white shadow-lg rounded-md mt-2 p-2 space-y-1 z-30 min-w-[200px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {[
                    ["Location Tracking", "/feature/locationtracking"],
                    ["Attendance", "/feature/Attendence"],
                    ["Task Management", "/feature/taskmanagement"],
                    ["Targets", "/feature/target"],
                  ].map(([label, path]) => (
                    <Link
                      to={path}
                      key={path}
                      className="block px-4 py-2 rounded hover:bg-blue-950 hover:text-white transition"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/pricing"
            className="hover:text-blue-950 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faChartLine} />
            Pricing
          </Link>
          <Link
            to="/blog"
            className="hover:text-blue-950 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faNewspaper} />
            Blog
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-950 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            About
          </Link>
          <Link
            to="/faqs"
            className="hover:text-blue-950 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faQuestionCircle} />
            FAQs
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-950 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-900 text-xl">
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 px-6 py-8 space-y-4 text-gray-900 font-medium"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-end">
              <button onClick={toggleMobileMenu} className="text-xl">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <Link
              to="/"
              className="block py-2 hover:bg-blue-950  hover:text-white"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setFeatureDropdownOpen(!featureDropdownOpen)}
                className="w-full flex justify-between items-center py-2 hover:bg-blue-950  hover:text-white"
              >
                <span>Features</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {featureDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/feature/locationtracking"
                    className=" block  py-1 hover:bg-blue-950  hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    Location Tracking
                  </Link>
                  <Link
                    to="/feature/Attendence"
                    className="block py-1  hover:bg-blue-950  hover:text-white  transition"
                    onClick={handleLinkClick}
                  >
                    Attendance
                  </Link>
                  <Link
                    to="/feature/taskmanagement"
                    className="block py-1  hover:bg-blue-950  hover:text-white  transition"
                    onClick={handleLinkClick}
                  >
                    Task Management
                  </Link>
                  <Link
                    to="/feature/target"
                    className="block py-1  hover:bg-blue-950  hover:text-white  transition"
                    onClick={handleLinkClick}
                  >
                    Targets
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/pricing"
              className="block py-2  hover:bg-blue-950  hover:text-white  transition"
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="block py-2 hover:bg-blue-950  hover:text-white  transition"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block py-2  hover:bg-blue-950  hover:text-white  transition"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/faqs"
              className="block py-2  hover:bg-blue-950  hover:text-white  transition"
              onClick={handleLinkClick}
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="block py-2  hover:bg-blue-950  hover:text-white  transition"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
