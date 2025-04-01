import React from 'react'
import Navbar from './Navbar';
import bg from "../assets/bg.jpg";
import Foot from "./Footer";
import tec from "../assets/tecture.png";

const committeeData = [
    {
        title: "TECHNICAL PROGRAM COMMITEE CHAIR",
        members: [
            "Prof. Sheng-Lung Peng,  Department of Creative Technologies and Product Design, National Taipei University of Business, Taiwan",
            "Prof. Dr. Farzad Moradpouri,  Associate Professor, Department of Mining Engineering, Lorestan University",
            "Prof. João Manuel R. S. Tavares,  Head of Department of Mechanical Engineering, University of Porto, Porto, Portugal",
            "Prof. Dr. Luminiţa Moraru,  Department of Physics, Dunarea de Jos University of Galați, Galați, Romania",
            "Prof. Dr. Sachin Jain,  Department of Computer Science, Oklahoma State University, OK, USA",
            "Dr. Wei-Chiang Hong,  Professor, SMIEEE, College of Shipbuilding Engineering, Harbin Engineering University, Harbin, China" ,
            "Dr. Mohammad Abu Yousuf,  Vice-Chancellor, Gazipur Digital University Professor, Institute of Information Technology, Jahangirnagar University, Dhaka, Bangladesh ",
            "Dr. Nilanjan Dey, Associate Professor, Techno International New Town, Chakpachuria, WB, India.",
            
        ]
    },
    {
        title: "TECHNICAL PROGRAM COMMITEE MEMBER",
        members: [
            "Dr. Rakesh Kumar Jain, Vice Chancellor Ajeenkya DY Patil University",
            "Dr. Aditya Abhyankar Dean, Faculty of Technology, Savitribai Phule Pune University, Pune",
            "Dr. Pramod Patil Dean- Faculty Science & Technology Savitribai Phule Pune University, Pune",
            "Dr. Sushma Kulkarni Vice Chancellor, Nicmar University, Pune",
            "Dr. Ranjeet Sawant Chairman, ISTE Maharashtra-Goa Section, India",
            "Dr.Pratapsinh Kakasaheb Desai,  President, ISTE, New Delhi, India",
            "Dr. Har Amrit Singh Sandhu,  President ASCE (American Society of Civil Engineers)",
            "Dr. Sudip Thepade Chairman, BOS, IT",
            "Dr. Sunil Thakare Chairman, BOS, Civil ",
            "Dr. Nilesh Uke Chairman, BOS, Computer-AIDS",
            "Dr. Abhijit Patankar Member, BOS, Information Technology"
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