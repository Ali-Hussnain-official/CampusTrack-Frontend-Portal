import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contacts = [
  {
    icon: <Mail className="text-blue-600" size={28} />,
    label: 'Email Support',
    detail: 'ali.hussnain3155@gmail.com',
  },
  {
    icon: <Phone className="text-blue-600" size={28} />,
    label: 'Campus Helpline',
    detail: '+92 3419243155',
  },
  {
    icon: <MapPin className="text-blue-600" size={28} />,
    label: 'Office Address',
    detail: 'Lahore, Punjab, Pakistan',
  },
];

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-4 animate-fadeIn">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 animate-slideDown">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contacts.map((item, index) => (
            <div
              key={index}
              className={`
                border border-gray-200 rounded-lg p-6 bg-white shadow-sm text-center
                hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                animate-fadeInUp
              `}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-4 flex justify-center transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-1">
                {item.label}
              </h3>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add this to your global CSS file */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;