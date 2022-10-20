import React from "react";

import {Counter} from './index'
import {main} from '../assets'

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col md:py-16 py-1">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full mt-[35px] sm:mt-[65px]">
          Discover, Collect <br />
          <span className="text-pink-500">and sell Timeless </span>
          <br className="ss:hidden" />
          <span className="text-blue-300">NFTs</span>
        </h2>
        <p className="font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          The world's first and largest digital marketplace for crypto
          collectibles and non - fungible tokens (NFTs).
        </p>
        <div className="w-full sm:w-3/5 border p-6 mt-10 rounded-[6px]">
          <h2 className="italic font-semibold text-blue-900">
            NFT drop coming soon
          </h2>
          <Counter />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center sm:ml-5 md:ml-10 ml-0 sm:mt-[55px] mt-10 relative ">
        <img src={main} alt="skeletor img" className="w-[100%] h-[100%] " />
      </div>
    </section>
  );
};

export default Hero;
