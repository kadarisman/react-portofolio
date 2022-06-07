import React from "react";
import img1 from '../img/image1.png';
import img2 from '../img/image2.png';
import img4 from '../img/image4.png';
import img5 from '../img/image5.png';
import img6 from '../img/image6.png';
//import img3 from '../img/image3.png';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const Project = () => {
  return (
    <div className="py-7 md:px-16 px-12">
    <div className="flex justify-center">
      <h3 className="text-4xl font-medium leading-tight mb-9">Projects</h3>
    </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="">
          <img src={img1} alt="portofolio" className="md:h-32 md:w-52"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">My Portfolio</h2>
          <a href="https://react-portofolio-two.vercel.app/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>
          <a href="https://github.com/kadarisman/react-portofolio" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>
          <p className="mt-2">
          Landing page for my personal portfolio, I created with react js and tailwindcss, this project is for any documentation I have worked on web application development.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="">
          <img src={img2} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Xample Company Profile</h2>
          <a href="https://try-project.000webhostapp.com/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>
          <a href="https://github.com/kadarisman/ci-company-profile" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>
          <p className="mt-2">
          An example of a company profile website that I created for testing I applied for a job as a web programmer, as proof I can use the codeigniter framework with login and register features.
          </p>
        </div>
      </div>      
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="">
          <img src={img4} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">API Service Klik-Pasien For RS</h2>
          <a href="https://klikpasien.rsudya.id/api-docs/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>
          
          <p className="mt-2">
          This is a rest api project for a hospital information system that bridges the hospital system with health services such as BPJS Kesehatan, built with node js, express and mysql RDBMS.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="">
          <img src={img5} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Integrated Campus Academic Information System</h2>
          <a href="https://siakad.ar-raniry.ac.id/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>
          
          <p className="mt-2">
           Web base project for academic information system integrated into campus DIKTI for university benefit, using Codeigniter Framework, jquery, ajax, and Mysql RDMBS
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="">
          <img src={img6} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Xample Ecommers</h2>
          <a href="https://leumang-shop1.vercel.app/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a> 
          <a href="https://github.com/kadarisman/ecom-tailwind" target='_blank' rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>
          
          <p className="mt-2">
           An example of an e-commerce website that I made for testing I applied for a job as a web front end developer, as proof that I can use React js with the fetch api.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Project;
