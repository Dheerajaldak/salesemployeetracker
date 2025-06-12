import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Company Overview */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">SalesTracker</h3>
          <p className="text-md text-gray-300 leading-relaxed mb-4 font-medium">
            Your all-in-one platform for sales tracking, analytics, and growth. Empowering teams to achieve their targets efficiently.
          </p>
          <div className="flex gap-4 mt-2 text-white">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 font-medium">
            <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-4 font-medium">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:info@aisyncinnovations.com" className="hover:text-white transition-colors">
                info@aisyncinnovations.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:helpdesk@aisyncinnovations.com" className="hover:text-white transition-colors">
                helpdesk@aisyncinnovations.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:+18443005430" className="hover:text-white transition-colors">
                +1-844-300-5430 (USA only)
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:+14692144477" className="hover:text-white transition-colors">
                +1 - 469-214-4477
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:+919392014678" className="hover:text-white transition-colors">
                +91 9392014678
              </a>
            </li>
            <li className="leading-relaxed">
              <strong className="block text-white">USA Location</strong>
              8751 Collin McKinney Pkwy, Suite 1102,<br />
              McKinney, TX 75070
            </li>
            <li className="leading-relaxed">
              <strong className="block text-white">India - Main Branch</strong>
              Raheja Mindspace, Survey No.64, Building Number 9,<br />
              13th Floor, Madhapur, Hyderabad,<br />
              Telangana 500081
            </li>
            <li className="leading-relaxed">
              <strong className="block text-white">India - Field Office</strong>
              1114, 10th Floor, Vasavi MPM Grand, Ameerpet,<br />
              Yellareddy Guda, near Ameerpet Metro Station,<br />
              Hyderabad, Telangana - 500073
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Stay in the Loop</h3>
          <p className="text-sm text-gray-300 mb-4 font-medium">Get updates on product news, tips, and exclusive offers.</p>
        
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-blue-800 pt-6 text-center text-gray-400 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-white">SalesTracker</span>. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
