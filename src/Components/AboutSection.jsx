import React from 'react';
import aboutImg from '../assets/Images/LoseSomething.jpg'; // Replace with a relevant image or illustration

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        
        {/* Image Side - with zoom effect on hover */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-md">
          <img
            src={aboutImg}
            alt="About CampusTrack"
            className="w-full h-72 object-cover rounded-md transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Side - with color and text animation */}
        <div className="w-full md:w-1/2 group">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 transition-all duration-300 group-hover:text-blue-600 group-hover:tracking-wide">
            What is CampusTrack?
            <span className="block w-20 h-1 bg-blue-500 mt-2 transition-all duration-500 group-hover:w-40 group-hover:bg-blue-400"></span>
          </h2>
          
          <p className="text-gray-700 text-base mb-4 leading-relaxed transition-all duration-300 group-hover:text-gray-800 group-hover:pl-2">
            CampusTrack is a dedicated portal designed to help students and faculty manage lost and found items efficiently. Whether you've misplaced a document, found a misplaced phone, or want to report a valuable item — CampusTrack connects the campus community instantly.
          </p>
          
          <p className="text-gray-700 text-base transition-all duration-300 group-hover:text-gray-800 group-hover:pl-2">
            We ensure transparency, ease of use, and a responsible ecosystem so that your campus remains connected, helpful, and secure for everyone.
          </p>
          
          {/* Animated button */}
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md transition-all duration-300 transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg active:scale-95">
            Learn More
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;