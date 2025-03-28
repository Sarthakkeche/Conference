// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { motion } from "framer-motion";
// import coll from "../assets/dyp.jpeg";
// import pune from "../assets/pune.jpeg";
// import location from "../assets/location.jpeg";
// import { Link } from "react-router-dom";

// const Venue = () => {
//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative w-full h-[450px] mt-20 flex items-center justify-center text-gray-800 bg-cover bg-center" 
//         style={{ backgroundImage: `url(${coll})` }}>
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 1 }} 
//           className="bg-white/80 p-6 rounded-xl text-center shadow-lg backdrop-blur-md">
//           <h1 className="text-5xl font-bold tracking-wide">Discover Our Venue</h1>
//           <p className="mt-2 text-lg text-gray-600">Experience world-class facilities in a stunning location.</p>
//         </motion.div>
//       </div>

//       {/* Venue Information */}
//       <section className="py-16 bg-white text-gray-900 px-6">
//         <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">🏝️ Venue Highlights</h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Floating Card: About Goa */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }} 
//             className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
//             <img src={pune} alt="Pune" className="rounded-md mb-4"/>
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">🌴 About Pune</h3>
//             <p className="text-gray-600">Explore Goa’s vibrant beaches, culture, and nightlife.</p>
//             <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//               Read More
//             </button>
//           </motion.div>

//           {/* Floating Card: Conference Venue */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }} 
//             className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
//             <img src={ coll} alt="Venue" className="rounded-md mb-4"/>
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">🏨 DR D Y Patil </h3>
//             <p className="text-gray-600">A premium venue with world-class conference halls.</p>
//             <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//               Read More
//             </button>
//           </motion.div>

//           {/* Floating Card: Location */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }} 
//             className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
//             <img src={location} alt="Location" className="rounded-md mb-4"/>
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">📍 Location</h3>
//             <p className="text-gray-600">Strategically located for easy access & breathtaking views.</p>
//             <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//               <Link to="https://maps.app.goo.gl/iWb89nzLF1o7Yy4PA">Veiw Map</Link>
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Interactive Transportation Section */}
//       <section className="py-16 bg-gray-100 text-gray-900 text-center px-6">
//         <h2 className="text-4xl font-bold text-blue-600 mb-10">🚀 How to Reach</h2>
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

//           {/* Air Travel */}
//           <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-lg border border-gray-300">
//             <h3 className="text-xl font-semibold mb-2 text-blue-600">✈️ By Air</h3>
//             <p className="text-gray-600">Goa International Airport connects to major cities worldwide.</p>
//           </motion.div>

//           {/* Rail Travel */}
//           <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-lg border border-gray-300">
//             <h3 className="text-xl font-semibold mb-2 text-green-600">🚆 By Rail</h3>
//             <p className="text-gray-600">Fast and convenient rail services across India.</p>
//           </motion.div>

//           {/* Road Travel */}
//           <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-lg border border-gray-300">
//             <h3 className="text-xl font-semibold mb-2 text-red-600">🚌 By Road</h3>
//             <p className="text-gray-600">Comfortable road connectivity via national highways.</p>
//           </motion.div>

//         </div>
//       </section>

//       {/* Interactive Map Section */}
//       <section className="py-16 bg-white text-gray-900 px-6">
//         <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">🗺️ Venue Map</h2>
//         <div className="flex justify-center">
//           <motion.img 
//             whileHover={{ scale: 1.02 }} 
//             className="rounded-lg shadow-lg"
//             src="https://source.unsplash.com/800x400/?map,goa"
//             alt="Map"
//           />
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-12 bg-blue-500 text-white text-center">
//         <h2 className="text-3xl font-semibold mb-4">🌟 Be a Part of This Experience!</h2>
//         <p className="mb-6">Sign up for updates and exclusive event details.</p>
//         <div className="flex justify-center">
//           <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md w-72 border-none focus:outline-none text-gray-900"/>
//           <button className="bg-white text-blue-600 px-6 py-2 rounded-r-md hover:bg-gray-200 transition">
//             Subscribe
//           </button>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Venue;
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
                A Premier Conference & Event Venue in Pune
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
              The Santai Auditorium, located in DY Patil College of Engineering, Pune, 
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
