import React, { useState } from "react";

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
    },
  ]);

  return (
    <div className="mt-6 border-t-2 border-gray-200 flex flex-col items-center justify-between md:flex-row md:justify-around p-4">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h3>
          @2024 Gaurav Bhadula<sup>TM</sup>. All Rights Reserved
        </h3>
      </div>
      <div className="flex flex-col items-center md:flex-row md:space-x-6">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="no-underline hover:border-b-2 hover:border-gray-200 mb-2 md:mb-0"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
