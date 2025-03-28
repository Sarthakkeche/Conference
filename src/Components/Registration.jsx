// import React from 'react'
// import Navbar from './Navbar'
// import bg from "../assets/bg.jpg";
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
// import tec from "../assets/tecture.png";

// function Registration() {
//     const [selectedTopic, setSelectedTopic] = useState("refund");
  
//     const topics = {
//       refund: "If you cancel your conference booking, or do not attend the conference, the conference fee will not be refunded. All Rights reserved to conference secretariat **",
//       payment: "Payment must be completed before event registration closes. No on-spot payment will be accepted.",
//       terms: "All participants and authors must abide by the conference's terms and conditions.",
//       privacy: "We respect your privacy and ensure that your data will not be shared with third parties.",
//       publication: "Accepted papers will be published in our official journal and indexed in major databases."
//     };
  
//   return (
//     <div style={{backgroundImage: `url(${tec})` , backgroundSize: 'cover' }}>
//       <Navbar />
//       <div className="relative h-80 w-full">
//         {/* Background Image */}
//         <img
//           src={bg}
//           alt="Background"
//           className="h-full w-full object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className=" text-gray-300 text-4xl md:text-6xl font-bold animate-fade-in">
//             Registration
//           </h1>
//         </div>
//       </div>
//       <div className='flex items-center justify-center '>
//         <div className="flex justify-center flex-col items-start min-h-screen w-[900px]  p-4">
//         <h1 className='font-bold text-2xl mt-8'>ICCSS 2025 Conference Benefits</h1>
//         <div className='h-[4px] w-[78px] bg-blue-500 mt-2'></div>
//           <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mt-4">
//             <h2 className="text-2xl font-bold text-center py-4 bg-gray-900 text-yellow-400">Registration Fees</h2>
//             <table className="w-full text-center border-collapse">
//               <thead>
//                 <tr className="bg-gray-700 text-yellow-400">
//                   <th className="p-3 border">Categories</th>
//                   <th className="p-3 border">ISTE Member</th>
//                   <th className="p-3 border">Non-ISTE Member</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-gray-600">
//                   <td colSpan="3" className="p-3 font-bold border">INDIAN AUTHORS</td>
//                 </tr>
//                 <tr className="bg-gray-700">
//                   <td className="p-3 border">Graduate Student / Research Scholar / Academician / Industry</td>
//                   <td className="p-3 border">Rs. 3,000/-</td>
//                   <td className="p-3 border">Rs. 3,500/-</td>
//                 </tr>
//                 <tr className="bg-gray-700">
//                   <td className="p-3 border">Extra page (after 6 pages)</td>
//                   <td className="p-3 border">Rs. 500</td>
//                   <td className="p-3 border">Rs. 500</td>
//                 </tr>
//                 <tr className="bg-gray-600">
//                   <td colSpan="3" className="p-3 font-bold border">FOREIGN AUTHORS</td>
//                 </tr>
//                 <tr className="bg-gray-700">
//                   <td className="p-3 border">Graduate Student / Research Scholar / Academician / Industry</td>
//                   <td className="p-3 border">$180</td>
//                   <td className="p-3 border">$220</td>
//                 </tr>
//                 <tr className="bg-gray-700">
//                   <td className="p-3 border">Extra page (after 6 pages)</td>
//                   <td className="p-3 border">$10</td>
//                   <td className="p-3 border">$10</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className='flex flex-col items-start justify-start mt-8'>
//             <h1 className='font-bold text-2xl'>ICCSS 2025 Conference Benefits</h1>
//             <div className='h-[4px] w-[78px] bg-blue-500 mt-2'></div>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4 text-sm">
//               <li>Access to Keynote talks</li>
//               <li>Access to paper presentation sessions</li>
//               <li>Conference lunch and refreshment</li>
//               <li>Tea and Coffee Breaks</li>
//               <li>Conference kit</li>
//               <li>Participation Certificate</li>
//             </ul>
//             <p className='mt-4 font-bold text-sm'>Notes</p>
//             <p className='text-gray-700 text-sm'>The conference is non-residential and delegates are kindly requested to make their own arrangement for accommodation. If you have any query, please drop a mail to <span className='text-blue-900'>support@ict4sd.org.</span></p>
//             <p className='text-gray-700 text-sm'>All participants and authors abide by the [<Link className='text-blue-900'>Terms & Conditions</Link>] as per the organizations guidelines.</p>
//           </div>
//           <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg w-[900px] mt-8">
//             <div className="flex border-b">
//               {Object.keys(topics).map((topic) => (
//                 <button
//                   key={topic}
//                   onClick={() => setSelectedTopic(topic)}
//                   className={`px-6 py-3 text-sm font-medium border-r focus:outline-none ${selectedTopic === topic ? 'bg-orange-500 text-white' : 'bg-blue-900 text-white'}`}
//                 >
//                   {topic.replace(/_/g, " & ").toUpperCase()}
//                 </button>
//               ))}
//             </div>

//             <div className="p-4 text-gray-700 mt-4">
//               {topics[selectedTopic]}
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default Registration;
import React, { useState } from 'react';
import Navbar from './Navbar';
import bg from "../assets/bg.jpg";
import tec from "../assets/tecture.png";
import { Link } from 'react-router-dom';

function Registration() {
    const [selectedTopic, setSelectedTopic] = useState("refund");
  
    const topics = {
      refund: "If you cancel your conference booking, or do not attend the conference, the conference fee will not be refunded. All Rights reserved to conference secretariat **",
      payment: "Payment must be completed before event registration closes. No on-spot payment will be accepted.",
      terms: "All participants and authors must abide by the conference's terms and conditions.",
      privacy: "We respect your privacy and ensure that your data will not be shared with third parties.",
      publication: "Accepted papers will be published in our official journal and indexed in major databases."
    };
  
  return (
    <div style={{backgroundImage: `url(${tec})` , backgroundSize: 'cover' }}>
      <Navbar />
      <div className="relative h-64 md:h-80 w-full">
        <img src={bg} alt="Background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-gray-300 text-3xl md:text-6xl font-bold animate-fade-in">Registration</h1>
        </div>
      </div>
      
      <div className='flex items-center justify-center p-4'>
        <div className="flex flex-col items-start min-h-screen w-full md:w-[900px] p-4">
          
          <h1 className='font-bold text-2xl mt-4 md:mt-8'>ICCSS 2025 Conference Benefits</h1>
          <div className='h-[4px] w-[78px] bg-blue-500 mt-2'></div>
          
          <div className="bg-gray-800 text-white rounded-lg shadow-lg w-full overflow-hidden mt-4">
            <h2 className="text-xl md:text-2xl font-bold text-center py-3 md:py-4 bg-gray-900 text-yellow-400">Registration Fees</h2>
            <table className="w-full text-center border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-700 text-yellow-400">
                  <th className="p-2 md:p-3 border">Categories</th>
                  <th className="p-2 md:p-3 border">ISTE Member</th>
                  <th className="p-2 md:p-3 border">Non-ISTE Member</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-600">
                  <td colSpan="3" className="p-2 md:p-3 font-bold border">INDIAN AUTHORS</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="p-2 md:p-3 border">Graduate Student / Research Scholar / Academician / Industry</td>
                  <td className="p-2 md:p-3 border">Rs. 3,000/-</td>
                  <td className="p-2 md:p-3 border">Rs. 3,500/-</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="p-2 md:p-3 border">Extra page (after 6 pages)</td>
                  <td className="p-2 md:p-3 border">Rs. 500</td>
                  <td className="p-2 md:p-3 border">Rs. 500</td>
                </tr>
                <tr className="bg-gray-600">
                  <td colSpan="3" className="p-2 md:p-3 font-bold border">FOREIGN AUTHORS</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="p-2 md:p-3 border">Graduate Student / Research Scholar / Academician / Industry</td>
                  <td className="p-2 md:p-3 border">$180</td>
                  <td className="p-2 md:p-3 border">$220</td>
                </tr>
                <tr className="bg-gray-700">
                  <td className="p-2 md:p-3 border">Extra page (after 6 pages)</td>
                  <td className="p-2 md:p-3 border">$10</td>
                  <td className="p-2 md:p-3 border">$10</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className='mt-8'>
            <h1 className='font-bold text-2xl'>ICCSS 2025 Conference Benefits</h1>
            <div className='h-[4px] w-[78px] bg-blue-500 mt-2'></div>
            <ul className="list-disc list-inside text-gray-700 mt-4 text-sm md:text-base">
              <li>Access to Keynote talks</li>
              <li>Access to paper presentation sessions</li>
              <li>Conference lunch and refreshment</li>
              <li>Tea and Coffee Breaks</li>
              <li>Conference kit</li>
              <li>Participation Certificate</li>
            </ul>
          </div>
          
          <div className="p-4 bg-white shadow-lg rounded-lg w-full mt-8">
            <div className="grid grid-cols-2 md:flex border-b">
              {Object.keys(topics).map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-2 text-xs md:text-sm font-medium border-r focus:outline-none ${selectedTopic === topic ? 'bg-orange-500 text-white' : 'bg-blue-900 text-white'}`}
                >
                  {topic.replace(/_/g, " & ").toUpperCase()}
                </button>
              ))}
            </div>
            <div className="p-3 md:p-4 text-gray-700 mt-2 text-xs md:text-base">
              {topics[selectedTopic]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;