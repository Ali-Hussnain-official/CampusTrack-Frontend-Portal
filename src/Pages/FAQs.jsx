import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is CampusTrack?",
      answer: "CampusTrack is a platform designed to help students and faculty report and recover lost and found items within the campus.",
    },
    {
      question: "Who can use CampusTrack?",
      answer: "Only registered students and faculty members of the university can report or claim items.",
    },
    {
      question: "How do I report a lost item?",
      answer: "Click on 'Submit Item' in the navbar and fill out the Lost Item form with accurate details and a picture.",
    },
    {
      question: "How can I claim a found item?",
      answer: "You can browse listed found items and contact the reporter through the provided contact information.",
    },
    {
      question: "Is admin approval needed?",
      answer: "Yes, all submissions are reviewed by campus admins before being visible to everyone to avoid misuse.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-blue-600 mb-3"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600"
          >
            Find answers to common questions about CampusTrack
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:bg-blue-50 shadow-md'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="ml-4" size={20} />
                ) : (
                  <ChevronDown className="ml-4" size={20} />
                )}
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/80 backdrop-blur-sm rounded-b-xl shadow-sm"
                  >
                    <div className="p-6 text-gray-700 border-t border-gray-100/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/Contact">Contact Support</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQs;