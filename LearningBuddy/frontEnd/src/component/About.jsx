import React from "react";
import logo2 from "../assets/logo2.png";

function About() {
  return (
    <>
      <div className="w-full h-90% flex mx-auto pt-24 pb-4   px-8">
        <div className="basis-[40%] pt-10 pb-32 px-20">
          <img src={logo2} className="w-auto h-auto items-center" alt="" />
        </div>
        <div className="basis-[60%] px-5  h-90% items-center justify">
          <h1 className="text-4xl font-bold">
            About <span className="text-fuchsia-600">LearningBuddy</span>
          </h1>
          <p className="mt-2 ">
            LearningBuddy is a free, online learning platform designed to help
            users improve their skills and expand their knowledge. Our mission
            is to provide valuable resources and support to help individuals
            overcome their learning challenges.
            <br />
            As a community-driven platform, we strive to foster a supportive and
            inclusive environment where anyone can learn, grow, and succeed.
          </p>
          <h1 className="text-4xl font-bold mt-6">About Me</h1>
          <p className="mt-2">
            Hi, I’m <span className="text-fuchsia-600 text-2xl font-bold">Sudip</span>, a passionate Full Stack Developer with a knack for
            creating seamless and engaging web applications. With a strong
            foundation in both front-end and back-end technologies, I thrive on
            transforming complex problems into elegant solutions.
            <br />
            My journey in
            tech began with a curiosity about how websites work, which evolved
            into a love for coding and a commitment to continuous learning. I’m
            proficient in a variety of languages and frameworks, including HTML,
            CSS, JavaScript, React, Node.js, Express.js, MongoDB , C and C++ that allowing me to tackle
            projects from concept to deployment.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
