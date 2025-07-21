import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = { name, email, message };

    // try {
    //   const res = await fetch('http://localhost:5000/api/users/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });

    //   const result = await res.json();
    //   if (result.success) {
    //     alert('Message sent successfully!');
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //   } else {
    //     alert('Failed to send message');
    //   }
    // } catch (err) {
    //   alert('Error: ' + err.message);
    // }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50" id="contact">
      <div className="container mx-auto px-5 pt-3">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get in <span className="text-indigo-600">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-3 font-medium" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="Ali Hussnain"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-3 font-medium" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="ali@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-3 font-medium" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info and Social Links */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-indigo-100 mb-6">
                Have a question or want to collaborate? We're here to help and answer any questions you might have.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-700 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Phone Number</p>
                    <p className="text-indigo-100">+92 3419243155</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-700 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email Address</p>
                    <p className="text-indigo-100">ali.hussnain3155@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-700 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="text-indigo-100">
                      Lahore,<br />
                      Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-semibold mb-6 text-gray-800">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/ali-hussnain-b706b82b3/" className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/ali-hussnain-b706b82b3/" className="p-3 rounded-full bg-sky-500 text-white hover:bg-sky-600"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/ali-hussnain-b706b82b3/" className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800"><FaLinkedinIn /></a>
                <a href="https://www.linkedin.com/in/ali-hussnain-b706b82b3/" className="p-3 rounded-full bg-pink-500 text-white hover:bg-pink-600"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
