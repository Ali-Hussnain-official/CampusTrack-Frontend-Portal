import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const BrowseItems = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const openItemDetails = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12 relative">
        Lost & Found Items
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockData.map((item) => (
          <div
            key={`${item.id}-${item.date}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            {/* Image with overlay effect */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <span
                className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${
                  item.category === 'Lost'
                    ? 'bg-blue-600 text-white'
                    : 'bg-green-600 text-white'
                } shadow-md`}
              >
                {item.category}
              </span>
            </div>

            {/* Text content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{item.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{item.date}</span>
              </div>
              
              <button 
                onClick={() => openItemDetails(item)}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
          Load More Items
        </button>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-100/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: '100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={{ 
                type: 'spring',
                damping: 25,
                stiffness: 100,
                duration: 0.6
              }}
              className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className={`p-6 relative ${selectedItem.category === 'Lost' ? 'bg-gradient-to-r from-blue-600 to-blue-500' : 'bg-gradient-to-r from-green-600 to-green-500'}`}>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-blue-200 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <h2 className="text-3xl font-bold text-white text-center">{selectedItem.title}</h2>
                <p className="text-blue-100 text-center mt-2">
                  {selectedItem.category === 'Lost' ? 'Lost Item Details' : 'Found Item Details'}
                </p>
              </div>

              {/* Content */}
              <div className="p-8 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="md:col-span-2">
                    <div className="relative h-64 overflow-hidden rounded-lg">
                      <img
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <MapPin className="text-blue-600 w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Location</h3>
                        <p className="text-gray-800">{selectedItem.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Calendar className="text-blue-600 w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Date {selectedItem.category === 'Lost' ? 'Lost' : 'Found'}</h3>
                        <p className="text-gray-800">{selectedItem.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <AlertCircle className="text-blue-600 w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Status</h3>
                        <p className="text-gray-800">{selectedItem.category === 'Lost' ? 'Not yet found' : 'Waiting to be claimed'}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Mail className="text-blue-600 w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Contact Email</h3>
                        <p className="text-gray-800">user@example.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Phone className="text-blue-600 w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Contact Phone</h3>
                        <p className="text-gray-800">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Detailed Description</h3>
                    <p className="text-gray-600">
                      This is a detailed description of the {selectedItem.title.toLowerCase()}. It includes all the specific 
                      features and identifying marks that would help recognize this item. The description 
                      would be provided by the user who reported this item as {selectedItem.category.toLowerCase()}.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                  {selectedItem.category === 'Found' && (
                    <button
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Claim This Item
                    </button>
                  )}
                  {selectedItem.category === 'Lost' && (
                    <button
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      I Found This
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Your mockData array remains the same as in your original code
const mockData = [
  {
    id: 1,
    title: 'Black Wallet',
    category: 'Lost',
    location: 'Library',
    date: '2025-06-15',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'USB Drive',
    category: 'Found',
    location: 'Computer Lab',
    date: '2025-06-14',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Backpack',
    category: 'Lost',
    location: 'Cafeteria',
    date: '2025-06-13',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Water Bottle',
    category: 'Found',
    location: 'Gym',
    date: '2025-06-12',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Notebook',
    category: 'Lost',
    location: 'Lecture Hall',
    date: '2025-06-11',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Smartphone',
    category: 'Found',
    location: 'Parking Lot',
    date: '2025-06-10',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 1,
    title: 'Black Wallet',
    category: 'Lost',
    location: 'Library',
    date: '2025-06-15',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'USB Drive',
    category: 'Found',
    location: 'Computer Lab',
    date: '2025-06-14',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Backpack',
    category: 'Lost',
    location: 'Cafeteria',
    date: '2025-06-13',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Water Bottle',
    category: 'Found',
    location: 'Gym',
    date: '2025-06-12',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Notebook',
    category: 'Lost',
    location: 'Lecture Hall',
    date: '2025-06-11',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Smartphone',
    category: 'Found',
    location: 'Parking Lot',
    date: '2025-06-10',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
]; 

export default BrowseItems;