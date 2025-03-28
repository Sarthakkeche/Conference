import React from 'react'
import Navbar from './Navbar';
import bg from "../assets/bg.jpg";
import Foot from "./Footer";
import tec from "../assets/tecture.png";

const committeeData = [
    {
        title: "TECHNICAL PROGRAM COMMITTEE CHAIRS",
        members: [
            "Dr. Shyam Akashe, Director - Research & Development, ITM University, Gwalior, India",
            "Dr. Nilanjan Dey, Professor, Techno International New Town, Chakpachuria, WB, India.",
            "Dr. Durgesh Kumar Mishra, Professor (CSE) and Director Sri Aurobindo Institute of Technology, Indore, MP, India."
        ]
    },
    {
        title: "TECHNICAL PROGRAM COMMITTEE MEMBERS",
        members: [
            "Dr. S C Satapathy - Professor & Dean (Research), School of Computer Engg, KIIT Deemed to be University, Bhubaneswar, India"
        ]
    }
];

function Committe() {
    return (
        <div style={{backgroundImage: `url(${tec})` , backgroundSize: 'cover' }}>
            <Navbar/>
            <div className="relative h-80 w-full">
                    {/* Background Image */}
                    <img
                      src={bg}
                      alt="Background"
                      className="h-full w-full object-cover"
                    />
            
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h1 className=" text-gray-300 text-4xl md:text-6xl font-bold animate-fade-in">
                        Committee
                      </h1>
                    </div>
                  </div>
            <div className="max-w-4xl mx-auto p-6 mt-8" >
                <h2 className="text-2xl font-bold">TECHNICAL PROGRAM COMMITTEE</h2>
                <div className='h-[4px] w-[78px] bg-blue-500 mt-2'></div>
                {committeeData.map((section, index) => (
                    <div key={index} className="mt-6">
                        <div className="bg-blue-900 text-white p-3 font-bold">{section.title}</div>
                        <div className="border border-gray-300">
                            {section.members.map((member, i) => (
                                <div key={i} className="p-3 border-b last:border-none bg-white text-gray-700">{member}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Foot/>
        </div>
    )
}

export default Committe;