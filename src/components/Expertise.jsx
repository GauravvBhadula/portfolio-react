import React, { useState } from "react";

export default function Expertise() {
  const [button, setButton] = useState({
    title: "Hire Me",
    link: "/Hire-me",
  });

  const [para, setPara] = useState([
    { title: "Core Java", number: "1" },
    { title: "Advanced Java", number: "2" },
    { title: "Tailwind CSS", number: "3" },
    { title: "NodeJS", number: "4" },
    { title: "React", number: "5" },
    { title: "DSA", number: "6" },
    { title: "JavaScript", number: "7" },
    { title: "HTML", number: "8" },
  ]);

  return (
    <div className="py-5">
      <h1 className="text-center text-2xl md:text-3xl font-semibold underline underline-offset-4">
        My Expertise
      </h1>

      <div className="flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-1/2 h-auto md:h-72 flex items-center justify-center bg-gradient-to-r from-pink-300 to-blue-400 p-4">
          <div className="text-center">
            <h1 className="font-bold text-xl md:text-2xl">
              I love these technologies
            </h1>
            <div className="pt-2 text-sm md:text-base">
              <p>
                1. HTML (HyperText Markup Language): The standard language for
                creating web pages and web applications.
              </p>
              <p>
                2. CSS (Cascading Style Sheets): A style sheet language used for
                describing the presentation of a document written in HTML.
              </p>
              <p>
                3. JavaScript: A powerful programming language that enables
                dynamic content on web pages.
              </p>
              <p>
                4. React: A popular JavaScript library for building user
                interfaces, particularly single-page applications.
              </p>
            </div>
            <div className="mt-4">
              <a
                className="p-2 bg-[#FFB02E] rounded-3xl font-bold"
                href={button.link}
              >
                {button.title}
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <div className="flex justify-center flex-wrap w-full md:w-2/3">
            {para.map((val) => (
              <p
                className="rounded-full bg-gray-200 m-2 p-2 hover:bg-orange-200 cursor-pointer font-semibold text-center"
                key={val.number}
              >
                {val.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
