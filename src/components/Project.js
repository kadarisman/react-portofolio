import React from "react";
import img1 from '../img/image1.png';
import img4 from '../img/image4.png';
import img5 from '../img/image5.png';
import img6 from '../img/image6.png';
import img7 from '../img/image7.png';
import img8 from '../img/image8.png';
import img9 from '../img/image9.png';
//import img3 from '../img/image3.png';
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
          <h2 className="text-2xl leading-tight font-bold mb-2">Portfolio <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Frontend</span></h2>
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
          <h2 className="text-2xl leading-tight font-bold mb-2">API Service Klik-Pasien For RS <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Backend</span></h2>
          <a href="https://klikpasien.rsudya.id/api-docs/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>          
          <p className="mt-2">
          Webservice untuk pendaftaran berobat yang menghubungkan rumah sakit ke layanan kesehatan BPJS, dibangun dengan node js, express dan mysql RDBMS.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img7} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Xample API Service Ecommers <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Backend</span></h2>
          <a href="https://final-project-ecom.herokuapp.com/api-docs/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>
          <a href="https://github.com/kadarisman/final-project-ecom" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>          
          <p className="mt-2">
          Ini hasil latihan saya untuk pembuatan webservice contoh kasus Ecommers, dibuat dengan node js, express dan mysql RDBMS, dan di deploy ke heroku.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img5} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Sistem Informasi Akademik <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Monolithic</span></h2>
          <a href="https://siakad.ar-raniry.ac.id/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>
          
          <p className="mt-2">
          Sistem informasi akademik yang terintegrasi ke DIKTI untuk kepentingan universitas, menggunakan Framework Codeigniter, jquery, ajax, dan Mysql RDMBS.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img6} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">Xample Ecommers <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Frontend</span></h2>
          <a href="https://leumang-shop1.vercel.app/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a> 
          <a href="https://github.com/kadarisman/ecom-tailwind" target='_blank' rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>          
          <p className="mt-2">
          Latihan pembuatan aplikasi Ecommers sederhana dengan React Js dan TailwindCss, dengan integrasi ke service Xample API Service Ecommers di atas
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img8} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">CMS Blog <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Frontend</span></h2>
          <a href="https://cms-klik.vercel.app/blogs" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a> 
          <a href="https://github.com/kadarisman/cms-klik" target='_blank' rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Github</button>
          </a>          
          <p className="mt-2">
          Latihan pembuatan CMS Blog sederhana dengan Next Js dan TailwindCss, dengan integrasi ke API Service CMS Blog dibawah
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="md:h-32 md:w-56">
          <img src={img9} alt="portofolio" className="md:h-32 md:w-56"/>
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-2xl leading-tight font-bold mb-2">API Service CMS Blog <span className="text-xs rounded-lg mr-3.5 bg-slate-300 py-1 px-1.5"> Backend</span></h2>
          <a href="https://quiet-harbor-45657.herokuapp.com/api-docs/" target='_blank' rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white text-xs font-semibold py-1 px-1.5 rounded-lg mr-3.5">Demo</button>
          </a>         
          <p className="mt-2">
          Ini hasil latihan saya untuk pembuatan webservice contoh kasus CMS Blog, dibuat dengan node js, express dan mysql RDBMS, dan di deploy ke heroku.
          </p>
        </div>
      </div>
      
    </div>
  );
};
export default Project;
