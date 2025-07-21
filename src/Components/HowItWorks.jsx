import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { ClipboardList, Search, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={32} className="text-blue-600" />,
    title: 'Submit a Report',
    description: 'Fill out a simple form to report a lost or found item. Include images, location, and item details.',
  },
  {
    icon: <Search size={32} className="text-blue-600" />,
    title: 'Browse Listings',
    description: 'Explore submitted lost and found items across the campus to reconnect with your belongings.',
  },
  {
    icon: <ShieldCheck size={32} className="text-blue-600" />,
    title: 'Admin Verification',
    description: 'Admins verify submissions to prevent spam and ensure safe communication between parties.',
  },
];

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref} 
      className="bg-white py-16 px-4"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-blue-700 text-center mb-10"
          variants={itemVariants}
        >
          How CampusTrack Works
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="mb-4 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;