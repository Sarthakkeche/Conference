
import React from "react";
import Navbar from "./Navbar";
import Foot from "./Footer";
import { motion } from "framer-motion";

const Venue = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen px-6 py-12">
        <motion.div
          className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="relative">
            <img
              src="/assets/santai_auditorium.jpg"
              alt="Santai Auditorium"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
              <h1 className="text-white text-5xl font-bold">D Y Patil College of Engineering</h1>
              <p className="text-white text-lg mt-2">
                
              </p>
            </div>
          </div>

          {/* Venue Details */}
          <div className="p-8 space-y-6 text-center">
            <motion.h2
              className="text-3xl font-bold text-blue-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Venue Details
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Shantai Auditorium, located in DY Patil College of Engineering, Pune, 
              is a state-of-the-art facility designed to host conferences, seminars, and 
              corporate events. Equipped with high-quality acoustics, modern infrastructure, 
              and spacious seating, it provides an ideal environment for professional gatherings.
            </p>

            {/* Venue Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div
                className="bg-gray-100 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-700">Spacious Seating</h3>
                <p className="text-gray-500 mt-2">
                  The auditorium accommodates over 500 attendees with a comfortable setup.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-100 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-700">Advanced A/V Systems</h3>
                <p className="text-gray-500 mt-2">
                  Features high-quality sound systems, projectors, and LED screens for seamless presentations.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-100 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-gray-700">Prime Location</h3>
                <p className="text-gray-500 mt-2">
                  Located within DY Patil College, easily accessible via public transport and parking facilities.
                </p>
              </motion.div>
            </div>

            {/* Google Maps Location */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-700">Find Us Here</h3>
              <iframe
                className="w-full h-72 mt-4 rounded-lg"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1339.75309686682!2d73.76062282733061!3d18.645009037654734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b6c9aa2fe3%3A0xd5d364a716b1aa63!2sShantai%20Auditorium!5e1!3m2!1sen!2sin!4v1743065107029!5m2!1sen!2sin"
                   allowFullScreen
                    loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
          </div>
        </motion.div>
      </div>
      <Foot />
    </>
  );
};

export default Venue;
