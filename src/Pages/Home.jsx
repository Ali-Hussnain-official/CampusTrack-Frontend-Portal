import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import HowItWorks from '../Components/HowItWorks';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default Home;
