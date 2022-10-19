import React, { useState, useEffect } from "react";


const Counter = () => {
  const [countDays, setCountDays] = useState(0)


  
  return (
    <div className="w-full mt-5 gap-3 sm:gap-8 grid grid-cols-4">
      <div className="flex-col overflow-hidden rounded count">
        <div className="p-2 tracking-wider text-lg">Counter</div>
        <div className="py-1 px-2 w-full h-6 bg-white font-medium italic text-black text-xs ">Days</div>
      </div>
      <div className="flex-col overflow-hidden rounded count">
        <div className="p-2 tracking-wider text-lg">Counter</div>
        <div className="py-1 px-2 w-full h-6 bg-white font-medium italic text-black text-xs ">Hrs</div>
      </div>
      <div className="flex-col overflow-hidden rounded count">
        <div className="p-2 tracking-wider text-lg">Counter</div>
        <div className="py-1 px-2 w-full h-6 bg-white font-medium italic text-black text-xs ">Mins</div>
      </div>
      <div className="flex-col overflow-hidden rounded count">
        <div className="p-2 tracking-wider text-lg">Counter</div>
        <div className="py-1 px-2 w-full h-6 bg-white font-medium italic text-black text-xs ">secs</div>
      </div>
    </div>
  );
};

export default Counter;
