import React from 'react'
import Navbar from './Navbar';
import bg from "../assets/bg.jpg";
import Foot from "./Footer";
import tec from "../assets/tecture.png";

const committeeData = [
    {

        title: "TECHNICAL PROGRAM COMMITEE CHAIRS",

        members: [
            "Prof. Dr. Sheng-Lung Peng, Director , Department of Creative Technologies and Product Design, National Taipei University of Business, Taiwan",
           
            "Dr. Nilanjan Dey, Associate Professor, Techno International New Town, Chakpachuria, WB, India.",
            
        ]
    },
    {
        title: "TECHNICAL PROGRAM COMMITEE MEMBERS",

        members: [
            "Dr. Farzad Moradpouri,  Associate Professor, Department of Mining Engineering, Lorestan University",
            "Dr. João Manuel R. S. Tavares,  Head of Department of Mechanical Engineering, University of Porto, Porto, Portugal",
            "Dr. Luminiţa Moraru,  Department of Physics, Dunarea de Jos University of Galați, Galați, Romania",
            "Dr. Sachin Jain,  Department of Computer Science, Oklahoma State University, OK, USA",
            "Dr. Wei-Chiang Hong,  Professor, SMIEEE, College of Shipbuilding Engineering, Harbin Engineering University, Harbin, China" ,
            "Dr. Mohammad Abu Yousuf,  Vice-Chancellor, Gazipur Digital University Professor, Institute of Information Technology, Jahangirnagar University, Dhaka, Bangladesh ",
            "Dr. Rakesh Kumar Jain, Vice Chancellor Ajeenkya DY Patil University, Pune",
            "Dr. Aditya Abhyankar Dean, Faculty of Technology, SPPU, Pune",
            "Dr. Pramod Patil Dean- Faculty Science & Technology SPPU, Pune",
            "Dr. Sushma Kulkarni Vice Chancellor, Nicmar University, Pune",
            "Dr. Ranjeet Sawant Chairman, ISTE Maharashtra-Goa Section, India",
            "Dr. Pratapsinh Kakasaheb Desai,  President, ISTE, New Delhi, India",
            "Dr. Har Amrit Singh Sandhu,  President ASCE (American Society of Civil Engineers)",
            "Dr. Sudip Thepade Chairman, BOS, Information Technology, SPPU, Pune",
            "Dr. Sunil Thakare Chairman, BOS, Civil Engineering, SPPU, Pune ",
            "Dr. Nilesh Uke Chairman, BOS, Computer-AIDS Engineering, SPPU, Pune",
            "Dr. Abhijit Patankar Member, BOS, Information Technology, SPPU, Pune",
            "Dr. Parikshit Mahalle Dean, R&D, Vishwakarma Institute of Technology, Pune",

            
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