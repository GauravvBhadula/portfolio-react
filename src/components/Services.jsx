import React from 'react'
import { FaAdjust, FaReact, FaServer } from "react-icons/fa";


export default function Services() {
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold underline underline-offset-4 pt-5'>My Services</h1>

      <div className='flex justify-between pl-5 pr-5'>
        <div className='rounded-[30px] bg-gray-100 mt-5 mr-5 text-center p-5 hover:bg-slate-300'>
          <FaReact className='text-4xl ml-80'/>
          <h1 className='text-2xl font-bold'>Web Development</h1>
          <p>1. Developed a Netflix clone as a personal project to deepen my understanding of React and frontend development. The application replicates the core features of Netflix, including a responsive user interface, dynamic content fetching, and interactive elements.
            <p className='mt-2'>
          2. Created a personal portfolio website to showcase my projects, skills, and experience. Designed a clean and modern interface using HTML, CSS, and JavaScript.This project helped me improve my web design skills.
          </p>
          </p>
          <button className='p-2 mt-3 bg-[#FFB02E] rounded-3xl font-bold'>Check</button>
        </div>
        <div className='rounded-[30px] bg-gray-100 mt-5 mr-5 text-center p-5 hover:bg-slate-300'>
          <FaServer  className='text-4xl ml-80'/>
          <h1 className='text-2xl font-bold'>Backend Development</h1>
          <p>As a budding Developer, I have recently embarked on my journey into backend technologies, focusing on MongoDB and Node.js. My current learning path involves understanding the fundamentals of Node.js for server-side scripting, and MongoDB for efficient, NoSQL database management.</p>
          <button className='p-2 mt-3 bg-[#FFB02E] rounded-3xl font-bold'>Check</button>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
