import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 px-4 justify-between items-center bg-[#00040f] text-white">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* Desktop Menu */}
      <ul className="hidden sm:flex justify-end items-center flex-1 space-x-10">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="text-[18px] font-medium cursor-pointer text-gray-400 hover:text-white transition-colors"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Mobile Menu Content */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gray-900 absolute top-20 right-4 min-w-[140px] rounded-xl z-50`}
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-[18px] font-medium cursor-pointer text-gray-400 hover:text-white transition-colors"
                onClick={() => setToggle(false)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
