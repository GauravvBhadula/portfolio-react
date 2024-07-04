import React from 'react'
import { ReactTyped } from "react-typed";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


import myPic from '../assets/pic.jpg'

function Banner() {
  return (
    <div className='flex'>
      <div   
        className='w-full flex items-center justify-center bg-gradient-to-r from-pink-300 to-blue-400'>
        <div className='w-2/3'>
        <p className='text-2xl font-semibold'>Hi, I am</p>
        <h1 className='text-5xl font-bold'>Gaurav Bhadula</h1>
        <div className='flex gap-3'>
        <h2 className='text-3xl font-medium'>And I am a</h2>
        <ReactTyped className='text-3xl font-bold text-[#d24242d3]' strings={["Frontend", "Developer"]} typeSpeed={150} backSpeed={80} loop />
        </div>
        <p className=''>I am a passionate and enthusiastic beginner Frontend Developer with a good foundation in web technologies. Having graduated with a degree in Mechanical and Automation Engineering, I have transitioned my focus to web development. I am skilled in HTML, CSS, JavaScript (ES6, React).</p>

        <div className='cursor-pointer flex text-4xl gap-6 mt-6'>
          <FaInstagram />
          <FaFacebook />
          <FaGithub />
          <FaLinkedin />
        </div>

        <div className='mt-5'>
          <a href="/contact" className='p-2 bg-[#FFB02E] rounded-3xl font-bold'>Contact Me</a>
        </div>
        </div>
       
        
      </div>
      <div className='w-full flex justify-center pb-4'>
        <img src={myPic} alt="picture" className='rounded-full mt-11'/>
      </div>
    </div>

  )
}

export default Banner