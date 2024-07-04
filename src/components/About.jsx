import React from 'react'
import myPic from '../assets/pic.jpg'
function About() {
  return (
    <div className='h-[540px] bg-gray-100'>
      <h className='pt-5 flex justify-center text-3xl font-semibold underline underline-offset-4'>About Me
      </h>

      <div className='flex justify-between'>
        <div className='w-1/2 flex justify-center'>
          <img src={myPic} alt="picture" className='rounded-full mt-11'/>
        </div>
        <div className='w-1/2 pt-20 pl-12 pr-44'>
          <h1 className='text-3xl font-bold'>Frontend Developer(HTML, CSS, JAVASCRIPT AND REACT JS)</h1>
          <p className='mt-2 text-lg font-medium'>
          I am a passionate and enthusiastic beginner Frontend Developer with a good foundation in web technologies. Having recently graduated with a degree in Mechanical and Automation Engineering, I have transitioned my focus to web development. I am skilled in HTML, CSS, JavaScript (ES6, React).
          </p>
          <div className='mt-5'>
          <a href="/read-more" className='p-2 bg-[#FFB02E] rounded-3xl font-bold'>Read more...</a>
        </div>
        </div>
      </div>
    
    </div>
  )
}

export default About
