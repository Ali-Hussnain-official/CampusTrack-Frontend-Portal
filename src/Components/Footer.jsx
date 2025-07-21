import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 pb-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-2">CampusTrack</h2>
          <p className="text-sm leading-relaxed mb-4">
            Your go-to platform to report, recover, and manage lost & found items across your university campus.
          </p>
          <div className="flex gap-4 mt-4 text-blue-600">
            <Facebook size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/browse" className="hover:text-blue-600">Browse Items</Link></li>
            <li><Link to="/submit" className="hover:text-blue-600">Submit Item</Link></li>
            <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
            <li><Link to="/signup" className="hover:text-blue-600">Signup</Link></li>
          </ul>
        </div>

        {/* Info Pages */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Box */}
        <div>
          <h3 className="text-md font-semibold text-gray-800 mb-2">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-blue-600" />
              ali.hussnain3155@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-blue-600" />
              +92 3419243155
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              Lahore, Punjab, Pakistan
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} CampusTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
