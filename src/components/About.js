import React from "react";

export const About = () => {
  return (
    <div className="flex-col py-3.5 px-9 md:py-7 md:px-16">
      <div className="flex justify-center">
        <h3 className="text-4xl font-medium leading-tight">About Me</h3>
      </div>
      <div className="flex flex-col gap-4 mt-3 md:flex-row md:justify-center">
        <div className="bg-slate-200 px-5 py-3 rounded-xl">
          <h2 className="text-xl font-medium mt-6 mb-5">Work Experience</h2>
          <div className="text-base mb-2.5 leading-8">
            <span className="mr-5">2020 - 2021</span> &nbsp;&nbsp;&nbsp; |
            <span className="ml-5">Frelance Web Developer</span><br/>
            <span className="mr-5">2021 - Present</span> |
            <span className="ml-5">Web Programmer at Klik Data Indonesia</span>
          </div>
        </div>
        <div className="bg-slate-200 px-5 py-3 rounded-xl">
          <h2 className="text-xl font-medium mt-6 mb-5">Education</h2>
          <div className="text-base mb-2.5 leading-8">
            <span className="mr-5">2004 | 2007</span> |
            <span className="ml-5">MAN 3 Bireuen </span><br/>
            <span className="mr-5">2013 | 2018</span> |
            <span className="ml-5">Teknik Informatika, Universitas Almuslim Bireuen</span>
          </div>
        </div>
      </div>      
    </div>
  );
};
export default About;
