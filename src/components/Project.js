import React from "react";
import img1 from '../img/image1.png';
import img4 from '../img/image4.png';
import img5 from '../img/image5.png';
import img10 from '../img/image10.png';
import img11 from '../img/image11.png';
import img12 from '../img/image12.png';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const Project = () => {
  return (
    <div className="py-7 md:px-16 px-12">
    <div className="flex justify-center">
      <h3 className="text-4xl font-medium leading-tight mb-9">Projects</h3>
    </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img1} alt="portofolio" className="md:h-32 md:w-52"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">React Portfolio Page <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Frontend</span></h2>
          <a href="https://react-portofolio-two.vercel.app/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>
          <a href="https://github.com/kadarisman/react-portofolio" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>
          <p className="mt-2">
          Portofolio pribadi saya, dibuat dengan React Js dan TailwindCss, untuk dokumentasi apa pun yang pernah saya kerjakan baik project client atau project hasil belajar.
          </p>
        </div>
      </div>      
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img4} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Node Js Web Service <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Backend</span></h2>
          <a href="https://klikpasien-dev.rsudsimeulue.id/api-docs/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>          
          <p className="mt-2">
          Webservice untuk pendaftaran berobat yang menghubungkan rumah sakit ke layanan kesehatan BPJS, dibangun dengan node js, express dan mysql RDBMS.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img12} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Next Js Redux Toolkit <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Frontend</span></h2>
          <a href="https://next-todo-redux-typescript.vercel.app/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a> 
          <a href="https://github.com/kadarisman/next-todo-redux-typescript" target='_blank' rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>          
          <p className="mt-2">
          Contoh Penggunaan Redux Toolkit pada Framework Next Js dengan Typescript yang terintegrasi ke service untuk CRUD Todo List, dan TailwindCss sebagai styling komponent
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img5} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Node Js Web Service <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Backend</span></h2>
          <a href="https://express-todo-typescript.vercel.app/todos" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>         
          <a href="https://github.com/kadarisman/express-todo-typescript" target='_blank' rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>    
          <p className="mt-2">
          Penggunaan Typescript dengan Express Js untuk pembuatan web service dengan konsep OOP (Object Oriented Programming) serta penerapan simple Authenctication untuk validasi client
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img10} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">API Service Info Dana Desa <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Backend</span></h2>
          <a href="https://dana-desa.herokuapp.com/api-docs/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>         
          <a href="https://github.com/kadarisman/dana-desa-be" target='_blank' rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>   
          <p className="mt-2">
          Project sederhana webservice untuk informasi dana desa, dibuat dengan node js, express dan mysql RDBMS, dan di deploy ke heroku.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img11} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Web Info Dana Desa <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Frontend</span></h2>
          <a href="https://dana-desa-fe.vercel.app/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>         
          <a href="https://github.com/kadarisman/dana-desa-fe" target='_blank' rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>   
          <p className="mt-2">
          Project sederhana untuk informasi dana desa, dibuat dengan Next Js, Tailwind Css, Chart Js, dan di deploy ke vercel.
          </p>
        </div>
      </div>
      
    </div>
  );
};
export default Project;
