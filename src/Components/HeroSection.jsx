import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import losefound from '../assets/Images/lose&found.jpeg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const texts = [
    "Lost Something on Campus?",
    "Found Someone's Belongings?",
    "CampusTrack Can Help!"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight mb-6 min-h-[120px] md:min-h-[144px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-gray-700 text-lg mb-8">
            CampusTrack helps students and staff easily report, browse, and recover lost items — all from one simple dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to='/signup' 
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 shadow-md hover:bg-blue-700 transition hover:scale-105 duration-300"
            >
              Get Started
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link 
              to='/faqs' 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-50 transition hover:scale-105 duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image with zoom effect */}
        <div className="md:w-1/2 overflow-hidden rounded-lg">
          <img
            src={losefound}
            alt="Lost and Found on Campus"
            className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;