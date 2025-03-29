import React from 'react'
import Navbar from "./Navbar";
import Foot from "./Footer";
function Topics() {
  return (
    <div>
        <Navbar/>
        <div className='ml-[7%]'>
      <h1 className='font-bold text-2xl mt-4 md:mt-30 '>Topics of interest include, but are not limited to, the following:</h1>
      <div className='h-[4px] w-[78px] bg-blue-500 mt-2 mb-5'></div>
      <div className='flex flex-col mb-30 '>
      <ul>
  <li>Intelligent Cybersecurity and smart systems.</li>
  <li>Secure and intelligent computing for smart systems.</li>
  <li>Advances in Generative AI and Its Applications.</li>
  <li>Integrating Smart Technologies: Revolutionizing Infrastructure for Rural and Urban Development.</li>
  <li>Cyber-physical Systems Enhancing Resilience and Efficiency in Civil Engineering use with Safety and Security.</li>
  <li>Field and Service Robotics & Industry 5.0.</li>
  <li>Digital twin technologies.</li>
  <li>RF, Microwave, Wireless, and Optical Communication.</li>
  <li>Embedded System, IoT, Innovation, and Solutions.</li>
</ul>

        
      </div>
      </div>
      <Foot/>
    </div>
  )
}

export default Topics;