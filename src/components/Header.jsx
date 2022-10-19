import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa"

import {navLinks} from '../constants'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex justify-between items-center py-2">
      <header className="uppercase font-semibold">nft</header>
      <ul className="justify-end items-center list-none hidden sm:flex flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-normal font-poppins uppercase cursor-pointer text-[16px] mr-5"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <button className="uppercase font-normal font-poppins">connect</button>
      </ul>

      <div className="sm:hidden flex">
        <button onClick={() => setToggle((prev) => !prev)} className='p-3'>{toggle ? <FaTimes /> : <FaBars />}</button>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-5 my-4 min-w-[240px] rounded-xl bg-black`}>
          <ul className='text-center flex-col flex px-12 justify-end items-center'>
            {navLinks.map((nav) => (
              <li key={nav.id} className="uppercase mb-3">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <button className="uppercase">connect</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
