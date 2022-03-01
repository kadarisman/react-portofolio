import React from "react";
import img1 from '../img/image1.png';
import img2 from '../img/image2.png';
import img3 from '../img/image3.png';

export const Fitur = () => {
  return (
    <div className="mt-5 py-7 px-16">
      <h3 className="text-2xl font-bold mb-2">Fitur</h3>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="">
          <img src={img1} />
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-3xl leading-tight font-bold mb-2">Desain Dashboard</h2>
          <label className="bg-black text-white text-base font-semibold py-1 px-2.5 rounded-lg mr-3.5">2022</label>
          <label className="text-stone-400 text-xl">Dashboard</label>
          <p className="mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            mollitia nesciunt id reiciendis ipsam quibusdam, nulla dignissimos
            odio nemo? Fugiat nulla veniam, non et dolorem animi sapiente
            debitis dolores doloribus.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7  border-b border-sky-500 md:flex-row">
        <div className="">
          <img src={img2} />
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-3xl leading-tight font-bold mb-2">Desain Dashboard</h2>
          <label className="bg-black text-white text-base font-semibold py-1 px-2.5 rounded-lg mr-3.5">2022</label>
          <label className="text-stone-400 text-xl">Dashboard</label>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            mollitia nesciunt id reiciendis ipsam quibusdam, nulla dignissimos
            odio nemo? Fugiat nulla veniam, non et dolorem animi sapiente
            debitis dolores doloribus.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-7 pb-7 border-b border-sky-500 md:flex-row">
        <div className="">
          <img src={img3} />
        </div>
        <div className="fitur-detail-text">
          <h2 className="text-3xl leading-tight font-bold mb-2">Desain Dashboard</h2>
          <label className="bg-black text-white text-base font-semibold py-1 px-2.5 rounded-lg mr-3.5">2022</label>
          <label className="text-stone-400 text-xl">Dashboard</label>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            mollitia nesciunt id reiciendis ipsam quibusdam, nulla dignissimos
            odio nemo? Fugiat nulla veniam, non et dolorem animi sapiente
            debitis dolores doloribus.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Fitur;
