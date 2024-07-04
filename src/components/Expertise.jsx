import React, { useState } from 'react'

export default function Expertise() {
  const [button, setButton] = useState(
    {
      title: "Hire Me",
      link: "/Hire-me"
    }
  );

  const [para, setPara] = useState(
    [
    {
      title: "Core Java" ,
      number: "1"
    },
    {
      title: "Advanced Java" ,
      number: "2"
    },
    {
      title: "Tailwind Css" ,
      number: "3"
    },
    {
      title: "NodeJS" ,
      number: "4"
    },
    {
      title: "React" ,
      number: "5"
    },
    {
      title: "DSA" ,
      number: "6"
    },
    {
      title: "Javascript" ,
      number: "7"
    },
    {
      title: "Html" ,
      number: "8"
    }
  ]);
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold underline underline-offset-4 pt-5'>My Expertise</h1>

      <div className='flex'>
        <div className='w-1/2 h-72 mt-12 flex items-center justify-center bg-gradient-to-r from-pink-300 to-blue-400'>
          <div className='text-center'>
            <h1 className='font-bold text-2xl'>I love these technologies</h1>
            <p className='pt-2 pl-2 pr-2 font-sans text-justify'><p>1. HTML (HyperText Markup Language): The standard language for creating web pages and web applications.
            </p>

            <p>2. CSS (Cascading Style Sheets): A style sheet language used for describing the presentation of a document written in HTML.
            </p>

<p>3. JavaScript: A powerful programming language that enables dynamic content on web pages.
</p>

<p>4. React: A popular JavaScript library for building user interfaces, particularly single-page applications.
</p>
</p>

            <div className='mt-4'>
               <a className='p-2 bg-[#FFB02E] rounded-3xl font-bold' href={button.link}>{button.title}</a>
            </div>
          </div>
          
        </div>

        <div className='flex justify-center items-center w-1/2'>
          <div className='flex justify-center flex-wrap w-1/3'>
            {para.map((val) => (
              <p className='rounded-full bg-gray-200 ml-4 mt-2 p-1 hover:bg-orange-200 cursor-pointer font-semibold hover:text-xl' key={val.number}>{val.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
