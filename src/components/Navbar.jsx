import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [links] = useState([
    { title: "Home", link: "/home", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Skills", link: "/skills", id: 3 },
    { title: "Portfolio", link: "/portfolio", id: 4 },
    { title: "Contact", link: "/contact", id: 5 },
  ]);

  const [navButton] = useState({
    title: "Hire Me",
    link: "/hire-me",
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-100">
      <div className="h-20 px-4 md:px-10 py-3 flex justify-between items-center">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-14 h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]"
          />
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="hover:border-b-2 hover:border-orange-600"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a
            href={navButton.link}
            className="p-2 bg-[#FFB02E] rounded-3xl font-bold"
          >
            {navButton.title}
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="block hover:border-b-2 hover:border-orange-600"
            >
              {link.title}
            </a>
          ))}
          <a
            href={navButton.link}
            className="block p-2 bg-[#FFB02E] rounded-3xl font-bold"
          >
            {navButton.title}
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
