import React, { useState, useEffect } from "react";


const Counter = () => {
  const [countDays, setCountDays] = useState(0);
  const [countHrs, setCountHrs] = useState(0);
  const [countMins, setCountMins] = useState(0);
  const [countSecs, setCountSecs] = useState(0);

  useEffect(() => {
    let interval;
    const startCount = () => {
      const countDown = new Date("December 25, 2022").getTime()
      interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const diff = countDown - currentTime

        const days = Math.floor(diff / (24* 60 * 60 * 1000));
        const hrs = Math.floor(diff % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
        const mins = Math.floor(
          (diff % ( 60 * 60 * 1000)) / (60 * 1000)
        );
        const secs = Math.floor((diff % (60 * 1000)) / 1000);

        if (diff < 0) {
          clearInterval(interval.current)
        } else {
          setCountDays(days);
          setCountHrs(hrs);
          setCountMins(mins);
          setCountSecs(secs);
        }
      })
    }
    startCount()
  },[])
  
  return (
    <div className="w-full mt-5 gap-3 sm:gap-8 grid grid-cols-4">
      <div className="flex-col overflow-hidden rounded count">
        <div className="p-2 tracking-wider text-lg">{countDays}</div>
        <div className="py-1 px-2 w-full h-6 bg-white font-medium italic text-black text-xs ">
          Days
        </div>
      </div>
      <div className="flex-col overflow-hidden rounded count">
        <div className="p-2 tracking-wider text-lg">{countHrs}</div>
        <div className="py-1 px-2 w-full h-6 bg-white font-medium italic text-black text-xs ">
          Hrs
        </div>
      </div>
      <div className="flex-col overflow-hidden rounded count">
        <div className="p-2 tracking-wider text-lg">{countMins}</div>
        <div className="py-1 px-2 w-full h-6 bg-white font-medium italic text-black text-xs ">
          Mins
        </div>
        
      </div>
      <div className="flex-col overflow-hidden rounded count">
        <div className="p-2 tracking-wider text-lg">{countSecs}</div>
        <div className="py-1 px-2 w-full h-6 bg-white font-medium italic text-black text-xs ">
          secs
        </div>
      </div>
    </div>
  );
};

export default Counter;
