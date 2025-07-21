import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/browse', label: 'Browse Items' },
    { path: '/submit', label: 'Submit Item' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
          CampusTrack
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                location.pathname === link.path
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm font-semibold transition"
            >
              Login
            </button>
          )}

          {/* FAQs */}
          <Link
            to="/faqs"
            className={`ml-2 px-3 py-1 rounded-md text-sm font-medium transition ${
              location.pathname === '/faqs'
                ? 'bg-blue-500 text-white'
                : 'text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            FAQs
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-4 pt-2 pb-4 space-y-2 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95 overflow-hidden'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
              location.pathname === link.path
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Login / Logout - Mobile */}
        {isLoggedIn ? (
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-semibold"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/login');
            }}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-semibold"
          >
            Login
          </button>
        )}

        {/* FAQs - Mobile */}
        <Link
          to="/faqs"
          onClick={() => setIsOpen(false)}
          className={`block text-center px-3 py-2 rounded-md text-sm font-medium transition ${
            location.pathname === '/faqs'
              ? 'bg-blue-500 text-white'
              : 'text-blue-600 hover:bg-blue-600 hover:text-white'
          }`}
        >
          FAQs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;