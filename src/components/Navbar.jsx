import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'

function Navbar() {
  const [links, setLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },

    {
      title: "About",
      link: "/about",
      id: 2,
    },

    {
      title: "Skills",
      link: "/skils",
      id: 3,
    },

    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 5,
    },
]);

  const [navButton, setNavButton] = useState({
    title: "Hire Me",
    link: "/hire-me"
  });
  return (
    <div className='h-20 px-10 py-3 flex justify-between items-center bg-slate-100'>
      <div >
        <img src={logo} alt="logo" style={{width: '70px', height: '70px'}} />
      </div>
      <div className='space-x-6'>
         {links.map((link)=>{
          return (<a key={link.id} href={link.link} className='hover: border-b-2 hover:border-orange-600' >
            {link.title}
          </a>
          )
})}
      </div>

      <div>
        <a href={navButton.link} className='p-2 bg-[#FFB02E] rounded-3xl font-bold'>{navButton.title}</a>
      </div>
    </div>
  )
}

export default Navbar
