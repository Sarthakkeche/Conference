
import React from "react";
import Navbar from "./Navbar";
import Foot from "./Footer";
import {Link} from "react-router-dom"
import CountdownTimer from "./Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import img1 from "../assets/OIP.jpg";
import img2 from "../assets/bg.jpg";
import img3 from "../assets/bg2.jpg";
import img4 from "../assets/bg3.jpg";
import img5 from "../assets/bg4.jpg";

function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section with Swiper */}
      <div className="h-screen relative">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="absolute top-0 left-0 w-full h-full"
        >
          {[img1, img2, img3, img4, img5].map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left p-6 md:p-20 mt-12 relative"
                style={{
                  backgroundImage:` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
                }}
              >
                {/* Hero Content */}
                <div className="flex flex-col items-center md:items-start justify-center font-playfair text-white">
                  <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">ICCSS 2025</h1>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300 font-bold text-center md:text-left">
                     International Conference on CyberTech & Smart Systems (ICCSS-2025)
                  </p>
                  <p className="mt-2 text-base md:text-lg max-w-2xl text-gray-300 font-bold">
                    Hosted By D.Y. PATIL COLLEGE OF ENGINEERING, AKURDI , PUNE-44
                  </p>
                  <p className="mt-2 text-base md:text-lg max-w-2xl text-gray-300 font-bold">9th-10th May 2025</p>
                  <div className="but flex gap-5">
                  <button className="mt-6 px-6 md:px-8 py-2 md:py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full text-sm md:text-lg font-semibold shadow-md transition-all duration-300">
                    <Link to="https://www.cureusjournals.com/users/sign_in">Submit Paper</Link>
                  </button>
                  <button className="mt-6 px-6 md:px-8 py-2 md:py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full text-sm md:text-lg font-semibold shadow-md transition-all duration-300">
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc9NFQRIPuotTZ1yu5HQaOPWD27jBUd3dUrgM1EGZqlAsIgSA/viewform?usp=preview">Register Here <ArrowOutwardIcon></ArrowOutwardIcon> </Link>
                  </button></div>
                </div>
                <div className="mt-6 md:mt-0">
                  <CountdownTimer />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Section */}
      <div className="bg-white text-gray-900 p-6 md:p-10 rounded-lg shadow-lg mx-4 md:mx-10 mt-10 text-center md:text-left">
        <h2 className="text-blue-500 text-lg md:text-xl font-bold">ABOUT ICCSS 2025</h2>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">Mode: Hybrid</h3>
        <p className="mt-4 text-sm md:text-base">
          The International Conference on CyberTech & Smart Systems (ICCSS-2025) is a two-day event organized by
          D. Y. Patil College of Engineering, Akurdi, Pune. The conference focuses on cybersecurity advancements
          and smart technology innovations, bringing together researchers, academicians, and industry professionals
          to share knowledge and insights.
        </p>
        <div className="mt-6 text-sm md:text-base">
          <p><span className="font-bold">Conference Date:</span> 9th and 10th May, 2025</p>
        
          <p><span className="font-bold">Venue:</span> D.Y. Patil College of Engineering, Pune</p>
        </div>
      </div>

      {/* Footer */}
      <Foot />
    </div>
  );
}

export default Home;