import React from 'react'
import Navbar from "./Navbar";
import tec from "../assets/tecture.png";

import Foot from "./Footer";

function Topics() {
  return (
    <div style={{backgroundImage: `url(${tec})` , backgroundSize: 'cover' }}>
      <Navbar />
      <div className='ml-[7%] ' >
        <h1 className='font-bold text-2xl mt-4 md:mt-30'>Topics of interest include, but are not limited to, the following:</h1>
        <div className='h-[4px] w-[78px] bg-blue-500 mt-2 mb-5'></div>
        <div className='flex flex-col mb-30'>
          <ul className="list-disc list-inside"> 
            <li>Intelligent Cybersecurity and smart systems.</li>
            <li>Secure and intelligent computing for smart systems.</li>
            <li>Advances in Generative AI and Its Applications.</li>
            <li>Integrating Smart Technologies: Revolutionizing Infrastructure for Rural and Urban Development.</li>
            <li>Smart Materials, Resilient Infrastructure, and Efficient Management in Civil Engineering.</li>
            <li>Field, Instrumentation, and Service Robotics & Industry 5.0.</li>
            <li>Digital twin technologies in Manufacturing.</li>
            <li>RF, Microwave, Wireless, and Optical Communication.</li>
            <li>Embedded System, IoT, Innovation, and Solutions.</li>
            <li>Robust and Intelligent Control Applications.</li>
            <li>Thermal and Energy Systems.</li>
            <li>Mathematical Modeling and Machine Learning for Optimization and Predictive Analytics in Complex Systems.</li>
            <li>Computational Chemistry, Sustainable, and Green Engineering.</li>
            <li>Process Control and Automation.</li>
          </ul>
        </div>
      </div>
      <Foot />
    </div>
  );
}

export default Topics;