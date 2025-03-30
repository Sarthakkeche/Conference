import React from 'react'
import Navbar from './Navbar';
import bg from "../assets/bg.jpg";
import Foot from "./Footer";
import tec from "../assets/tecture.png";

const committeeData = [
    {
        title: "TECHNICAL PROGRAM COMMITTEE CHAIRS",
        members: [
            " Prof. Sheng-Lung Peng,  Department of Creative Technologies and Product Design, National Taipei University of Business, Taiwan",
            "Dr. Nilanjan Dey, Associate Professor, Techno International New Town, Chakpachuria, WB, India.",
            "Prof. Dr. Farzad Moradpouri,  Associate Professor, Department of Mining Engineering, Lorestan University",
            "Prof. João Manuel R. S. Tavares,  Head of Department of Mechanical Engineering, University of Porto, Porto, Portugal",
            "Prof. Dr. Luminiţa Moraru,  Department of Physics, Dunarea de Jos University of Galați, Galați, Romania",
            "Prof. Dr. Sachin Jain,  Department of Computer Science, Oklahoma State University, OK, USA",
            "Dr.Pratapsinh Kakasaheb Desai,  President, ISTE, New Delhi, India",
            "Dr. Har Amrit Singh Sandhu,  President ASCE (American Society of Civil Engineers)"
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