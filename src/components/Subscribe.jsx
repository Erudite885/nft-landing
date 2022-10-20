import React from "react";

const Subscribe = () => {
  return (
    <section id="subscribe" className="my-12">
      <header className="flex flex-col justify-center items-center mb-12 ">
        <h2 className="font-bold tracking-wide text-xl uppercase">
          Subscribe to us
        </h2>
        <hr className="w-24 h-1 mt-2 bg-pink-500 border-0 " />
      </header>

      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center rounded border border-sky-500">
          <input
            type="email"
            placeholder="E-mail"
            className="w-4/6 md:w-5/6 px-6 sm:py-5 py-3 placeholder:text-yellow-500"
          />
          <button type="button" className="uppercase w-2/6 font-bold text-xs">
            subscribe
          </button>
        </div>
        <p className='font-poppins font-medium text-sm text-center italic mt-3'>
          By subscribing to us you will get a notification once a new NFT is
          dropped.
        </p>
        <div>
          {}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
