

import React, { useEffect, useState } from "react";

const ConferenceClock = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 43);
  targetDate.setHours(targetDate.getHours() + 11);
  targetDate.setMinutes(targetDate.getMinutes() + 30);
  targetDate.setSeconds(targetDate.getSeconds() + 41);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  const getRotation = (unit, max) => (unit / max) * 360;

  const secondRotation = (timeLeft.seconds / 60) * 360;
  const minuteRotation = (timeLeft.minutes / 60) * 360;
  const hourRotation = (timeLeft.hours / 12) * 360;

  return (
    <div className="relative flex items-center justify-center w-[320px] h-[320px] bg-opacity-10 backdrop-blur-md rounded-full shadow-2xl border-6 border-white">
       {/* Center Dot */}
       <div className="absolute w-3 h-3 bg-white rounded-full z-10"></div>

{/* Clock Hands */}
<div
  className="absolute w-2 h-[70px] bg-blue-400 origin-center"
  style={{
    transform: `rotate(${hourRotation}deg) translateY(-60%)`,
  }}
></div>
<div
  className="absolute w-[2px] h-[90px] bg-yellow-400 origin-center"
  style={{
    transform: `rotate(${minuteRotation}deg) translateY(-50%)`,
  }}
></div>
<div
  className="absolute w-[1.4px] h-[110px] bg-red-400 origin-center"
  style={{
    transform: `rotate(${secondRotation}deg) translateY(-50%)`,
  }}
></div>
      
      {/* Small Ticks */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className={`absolute ${i % 5 === 0 ? 'w-[2px] h-[8px] bg-white' : 'w-[1px] h-[4px] bg-gray-500'}`}
          style={{ transform: `rotate(${i * 6}deg) translateY(-140px)` }}
        ></div>
      ))}

      {/* Countdown Labels */}
      <div className="absolute top-5 text-white text-sm">{timeLeft.days} day</div>
      <div className="absolute left-6 text-white text-sm">{timeLeft.minutes} min</div>
      <div className="absolute right-6 text-white text-sm">{timeLeft.seconds} sec</div>
      <div className="absolute bottom-5 text-white text-sm">{timeLeft.hours} hr</div>
    </div>
  );
};

export default ConferenceClock;

// import React, { useState, useEffect } from "react";

// const ConferenceClock = () => {
//   const targetDate = new Date();
//   targetDate.setDate(targetDate.getDate() + 43);
//   targetDate.setHours(targetDate.getHours() + 11);
//   targetDate.setMinutes(targetDate.getMinutes() + 30);
//   targetDate.setSeconds(targetDate.getSeconds() + 41);

//   const calculateTimeLeft = () => {
//     const now = new Date();
//     const difference = targetDate - now;

//     let timeLeft = {};
//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const clockInterval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     const countdownInterval = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => {
//       clearInterval(clockInterval);
//       clearInterval(countdownInterval);
//     };
//   }, []);

//   const getRotation = (unit, max) => (unit / max) * 360;

//   const secondRotation = (timeLeft.seconds / 60) * 360;
//   const minuteRotation = (timeLeft.minutes / 60) * 360;
//   const hourRotation = (timeLeft.hours / 12) * 360;

//   return (
//     <div className="flex justify-center items-center h-screen text-white ">
//       <div className="flex space-x-8">
//         {/* Clock */}
//         <div className="relative flex items-center justify-center w-[180px] h-[180px] bg-opacity-10 backdrop-blur-md rounded-full shadow-2xl border-6 border-white">
//           <div className="absolute w-3 h-3 bg-white rounded-full z-10"></div>
//           <div
//             className="absolute w-1 h-[44px] bg-blue-400 origin-center"
//             style={{ transform: `rotate(${hourRotation}deg) translateY(-60%)` }}
//           ></div>
//           <div
//             className="absolute w-[2px] h-[55px] bg-yellow-400 origin-center"
//             style={{ transform: `rotate(${minuteRotation}deg) translateY(-50%)` }}
//           ></div>
//           <div
//             className="absolute w-[1.4px] h-[65px] bg-red-400 origin-center"
//             style={{ transform: `rotate(${secondRotation}deg) translateY(-50%)` }}
//           ></div>
//           {[...Array(60)].map((_, i) => (
//             <div
//               key={i}
//               className={`absolute ${i % 5 === 0 ? 'w-[2px] h-[8px] bg-white' : 'w-[1px] h-[4px] bg-gray-500'}`}
//               style={{ transform: `rotate(${i * 6}deg) translateY(-78px)` }}
//             ></div>
//           ))}
//         </div>
//         {/* Countdown Timer */}
//         <CountdownTimer />
//       </div>
//     </div>
//   );
// };

// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const targetDate = new Date("2025-05-09T00:00:00");

//     const updateCountdown = () => {
//       const now = new Date();
//       const difference = targetDate - now;

//       if (difference <= 0) {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       });
//     };

//     updateCountdown();
//     const timer = setInterval(updateCountdown, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex justify-center items-center mt-8 text-white">
//       <div className="flex space-x-6 font-bold font-mono">
//         {[{ label: "Days", value: timeLeft.days },
//           { label: "Hours", value: timeLeft.hours },
//           { label: "Mins", value: timeLeft.minutes },
//           { label: "Secs", value: timeLeft.seconds }].map((item, index) => (
//           <div key={index} className="relative bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center border border-gray-500 transform hover:scale-105 transition duration-300">
//             <span className="block text-2xl text-green-400 drop-shadow-md">
//               {String(item.value).padStart(2, "0")}
//             </span>
//             <p className="text-sm text-gray-300 uppercase mt-2">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ConferenceClock;
