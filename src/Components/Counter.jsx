

import React, { useEffect, useState } from "react";

const ConferenceClock = () => {
  // Set target date to May 9, 2025, at 00:00:00
  const targetDate = new Date("2025-05-09T00:00:00");

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
  
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

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
        style={{ transform: `rotate(${hourRotation}deg) translateY(-60%)` }}
      ></div>
      <div
        className="absolute w-[2px] h-[90px] bg-yellow-400 origin-center"
        style={{ transform: `rotate(${minuteRotation}deg) translateY(-50%)` }}
      ></div>
      <div
        className="absolute w-[1.4px] h-[110px] bg-red-400 origin-center"
        style={{ transform: `rotate(${secondRotation}deg) translateY(-50%)` }}
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
      
      {/* "Starts In" Text */}
      <div className="absolute bottom-14 text-white text-lg font-bold italic tracking-wide">Starts In</div>
    </div>
  );
};

export default ConferenceClock;
// 