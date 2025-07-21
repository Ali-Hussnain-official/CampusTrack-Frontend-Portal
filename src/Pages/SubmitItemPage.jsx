import React from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertTriangle } from 'lucide-react';

const SubmitItemPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4 py-12">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Submit an Item</h2>
          <p className="text-blue-100 text-lg">Help keep our campus organized and connected</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-200">
          {/* Lost Item Option */}
          <Link
            to="/lost"
            className="group relative p-10 flex flex-col items-center text-center hover:bg-blue-50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-blue-100 rounded-full inline-flex group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle size={60} className="text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Report Lost Item</h3>
              <p className="text-gray-600 mb-6 text-base max-w-xs">
                Lost something on campus? Let our community help you find it.
              </p>
              <span className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </Link>

          {/* Found Item Option */}
          <Link
            to="/found"
            className="group relative p-10 flex flex-col items-center text-center hover:bg-green-50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="mb-6 p-4 bg-green-100 rounded-full inline-flex group-hover:scale-110 transition-transform duration-300">
                <Search size={60} className="text-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-3">Report Found Item</h3>
              <p className="text-gray-600 mb-6 text-base max-w-xs">
                Found something? Help return it to its rightful owner.
              </p>
              <span className="inline-block px-6 py-2 bg-green-600 text-white font-medium rounded-full group-hover:bg-green-700 transition-colors duration-300">
                Get Started
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-50 p-6 text-center border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Need help? <span className="text-blue-600 hover:underline cursor-pointer"><Link to = '/faqs'>Contact support</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitItemPage;