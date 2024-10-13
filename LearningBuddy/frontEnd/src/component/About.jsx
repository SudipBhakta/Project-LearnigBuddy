import React from "react";
import logo2 from "../assets/logo2.png";

function About() {
  return (
    <div className="flex flex-col md:flex-row mx-auto pt-24 pb-4 px-8 ">
      <div className="md:basis-[40%] md:pt-20 pb-8 flex justify-center" >
        <img src={logo2} className="w-2/3 h-auto md:h-80" alt="LearningBuddy Logo" />
      </div>
      <div className="md:basis-[60%] h-auto items-center justify-center py-6 pr-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          About <span className="text-fuchsia-600">LearningBuddy</span>
        </h1>
        <p className="mt-2 text-base md:text-lg">
          LearningBuddy is a free, online learning platform designed to help
          users improve their skills and expand their knowledge. Our mission
          is to provide valuable resources and support to help individuals
          overcome their learning challenges.
          <br />
          As a community-driven platform, we strive to foster a supportive and
          inclusive environment where anyone can learn, grow, and succeed.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-6">About Me</h1>
        <p className="mt-2 text-base md:text-lg">
          Hi, I’m <span className="text-fuchsia-600 text-xl font-bold">Sudip</span>, a passionate Full Stack Developer with a knack for
          creating seamless and engaging web applications. With a strong
          foundation in both front-end and back-end technologies, I thrive on
          transforming complex problems into elegant solutions.
          <br />
          My journey in tech began with a curiosity about how websites work, which evolved
          into a love for coding and a commitment to continuous learning. I’m
          proficient in a variety of languages and frameworks, including HTML,
          CSS, JavaScript, React, Node.js, Express.js, MongoDB, C, and C++ that allow me to tackle
          projects from concept to deployment.
        </p>
      </div>
    </div>
  );
}

export default About;
