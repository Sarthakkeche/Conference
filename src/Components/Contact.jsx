import React from "react";
import Navbar from "./Navbar";
import Foot from "./Footer";
import tec from "../assets/tecture.png";
import bg from "../assets/bg.jpg";

const ContactUs = () => {
  return (
    <>
    <div style={{backgroundImage: `url(${tec})` , backgroundSize: 'cover' }}>
      <Navbar />
     
      <div className="flex flex-col items-center mt-25 min-h-screen px-6 " style={{backgroundImage: `url(${tec})` , backgroundSize: 'cover' }}>
        <div className="max-w-2xl w-full bg-white shadow-xl rounded-xl p-10 border border-gray-300 mt-10">
          <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">Contact Us</h2>

          <div className="space-y-8 text-center">
           

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">👨‍🏫 Contact Persons</h3>
              <p className="text-gray-600 text-lg">Dr. Latika Desai, Dr. Ashok More</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Number</h3>
              <p className="text-gray-600 text-lg">9822601202 , 9822208643</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">📧 Email</h3>
              <a
                href="mailto:iccss2025@gmail.com"
                className="text-yellow-600 text-lg font-semibold hover:text-yellow-700 transition duration-300"
              >
               iccss@dypcoeakurdi.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <Foot />
      </div>
    </>
  );
};

export default ContactUs;
