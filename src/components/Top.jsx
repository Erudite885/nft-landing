import React from "react";
import { top } from "../constants";

const Top = () => {
  return (
    <section id="explore" className="my-12">
      <header className="flex flex-col justify-center items-center mb-12 ">
        <h2 className="font-bold tracking-wide text-xl uppercase">
          top nft<span className="lowercase">s</span>
        </h2>
        <hr className="w-24 h-1 mt-2 bg-pink-500 border-0 " />
      </header>

      <main className="grid justify-center items-center sm:grid-cols-3 sm:gap-10 md:grid-cols-4 md:gap-20">
        {top.map((t) => (
          <div key={t.id} className="pb-5 relative border-0">
            <div className="w-[80vw] sm:w-[30vw] mr-1 md:w-[20vw] relative">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-64 object-cover sm:object-fit "
              />
              <div className="flex-col top-hidden absolute top-1 bottom-1 left-1 right-1">
                <h2 className="font-semibold text-black">{t.name}</h2>
                <div className="mt-2 text-lg font-poppins tracking-wider text-black">
                  {t.price}
                </div>
              </div>
            </div>
            <button className="px-6 text-stone-600 tracking-wide py-3 mt-5 border font-bold text-sm rounded">
              Read More
            </button>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Top;
