import React, { useState } from 'react'

function Footer() {
  const [links, setLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },

    {
      title: "Privacy Policy",
      link: "/privacy-policy",
      id: 2,
    },

    {
      title: "Licensing",
      link: "/licensing",
      id: 3,
    },

    {
      title: "Contact",
      link: "/contact",
      id: 4,
    }
]);
  return (
    <div className='mt-6 flex justify-around border-t-2 border-gray-200' >
      <div className='m-4' >
        <h3>@2024 Gaurav Bhadula<sup>TM</sup>. All Rights Reserved
        </h3>
      </div>
      <div className='space-x-6 m-4'>
         {links.map((link)=>(
          <a key={link.id} href={link.link} className='no-underline hover:border-b-2 hover:border-gray-200' >
            {link.title}
          </a>
         ))}
      </div>
    </div>
  )
}

export default Footer
