import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';

const LostItemForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    contactInfo: '',
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const file = files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewImage(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.contactInfo.trim()) newErrors.contactInfo = 'Contact info is required';
    if (!formData.image) newErrors.image = 'Image is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setFormData({
        title: '',
        description: '',
        location: '',
        date: '',
        contactInfo: '',
        image: null,
      });
      setPreviewImage(null);
      setErrors({});
      setSubmitSuccess(false);
      setIsVisible(false);
      setTimeout(() => navigate(-1), 500);
    }, 2000);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => navigate(-1), 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-blue-200 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold text-white text-center">Report a Lost Item</h2>
              <p className="text-blue-100 text-center mt-2">Help us reunite you with your belongings</p>
            </div>

            {/* Form Content */}
            <div className="p-8 max-h-[80vh] overflow-y-auto">
              {submitSuccess ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={60} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Submission Successful!</h3>
                  <p className="text-gray-600">Your lost item has been reported. We'll notify you if it's found.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-1"
                  >
                    <label className="block text-gray-700 font-medium">Item Title*</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="e.g. Black Wallet, iPhone 13, etc."
                      value={formData.title}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle size={16} className="mr-1" /> {errors.title}
                      </p>
                    )}
                  </motion.div>

                  {/* Description */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-1"
                  >
                    <label className="block text-gray-700 font-medium">Description*</label>
                    <textarea
                      name="description"
                      placeholder="Detailed description including brand, color, distinguishing features..."
                      value={formData.description}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition h-32`}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle size={16} className="mr-1" /> {errors.description}
                      </p>
                    )}
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Location */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-1"
                    >
                      <label className="block text-gray-700 font-medium">Lost Location*</label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Building name, room number, etc."
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.location ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                      />
                      {errors.location && (
                        <p className="text-red-500 text-sm flex items-center">
                          <AlertCircle size={16} className="mr-1" /> {errors.location}
                        </p>
                      )}
                    </motion.div>

                    {/* Date */}
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-1"
                    >
                      <label className="block text-gray-700 font-medium">Date Lost*</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-sm flex items-center">
                          <AlertCircle size={16} className="mr-1" /> {errors.date}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  {/* Contact Info */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-1"
                  >
                    <label className="block text-gray-700 font-medium">Contact Information*</label>
                    <input
                      type="text"
                      name="contactInfo"
                      placeholder="Email or phone number"
                      value={formData.contactInfo}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.contactInfo ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
                    />
                    {errors.contactInfo && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle size={16} className="mr-1" /> {errors.contactInfo}
                      </p>
                    )}
                  </motion.div>

                  {/* Image Upload */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-1"
                  >
                    <label className="block text-gray-700 font-medium">Upload Image*</label>
                    <label className={`flex flex-col items-center justify-center w-full h-32 border-2 ${errors.image ? 'border-red-500' : 'border-dashed border-gray-300'} rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition`}>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload size={24} className="text-gray-500 mb-2" />
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB)</p>
                      </div>
                      <input 
                        type="file" 
                        name="image" 
                        accept="image/*" 
                        onChange={handleChange} 
                        className="hidden" 
                      />
                    </label>
                    {errors.image && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle size={16} className="mr-1" /> {errors.image}
                      </p>
                    )}
                  </motion.div>

                  {/* Preview */}
                  {previewImage && (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="mt-2"
                    >
                      <p className="text-gray-600 mb-2">Image Preview:</p>
                      <div className="relative group">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-64 object-cover rounded-lg border border-gray-200 shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewImage(null);
                            setFormData({ ...formData, image: null });
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-all flex items-center justify-center`}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin mr-3 h-5 w-5" />
                          Processing...
                        </>
                      ) : (
                        'Submit Lost Item Report'
                      )}
                    </button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LostItemForm;