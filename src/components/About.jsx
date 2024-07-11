import React from "react";
import myPic from "../assets/pic.jpg";

function About() {
  return (
    <div className="h-auto bg-gray-100 py-5">
      <h1 className="flex justify-center text-3xl font-semibold underline underline-offset-4">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mt-5">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={myPic}
            alt="picture"
            className="rounded-full mt-5 md:mt-11 w-48 md:w-64"
          />
        </div>
        <div className="w-full md:w-1/2 pt-10 md:pt-20 px-5 md:px-12 lg:px-20">
          <h1 className="text-2xl md:text-3xl font-bold">
            Frontend Developer (HTML, CSS, JavaScript, and React JS)
          </h1>
          <p className="mt-2 text-base md:text-lg font-medium">
            I am a passionate and enthusiastic beginner Frontend Developer with
            a good foundation in web technologies. Having recently graduated
            with a degree in Mechanical and Automation Engineering, I have
            transitioned my focus to web development. I am skilled in HTML, CSS,
            JavaScript (ES6, React).
          </p>
          <div className="mt-5">
            <a
              href="/read-more"
              className="p-2 bg-[#FFB02E] rounded-3xl font-bold"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
