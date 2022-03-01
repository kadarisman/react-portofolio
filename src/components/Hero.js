import React from 'react'
import Profil from '../img/profil.jpg'

export const Hero = () => {
  return (
    <div className='flex flex-col-reverse mt-10 md:flex md:flex-row'>
        <div className='w-full text-center mt-10 md:text-left md:mt-0 md:w-3/4'>
            <h1 className='mb-6 font-bold text-4xl '>Hi, I am Risman, <br/> Fullstack Engineer</h1>
            <h4 className='mb-6 font-bold text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus vel tenetur autem, est minima doloremque non animi voluptas consequatur, culpa dolore? Error accusamus, nesciunt dolor impedit ex aperiam vel.
            </h4>
            <button className='bg-sky-500 text-xl hover:bg-sky-700 text-white px-3 py-3 rounded-xl mr-2'>Download Resume</button>
            <button className='bg-indigo-500 text-xl hover:bg-indigo-700 text-white px-3 py-3 rounded-xl'>My Github</button>
        </div>
        <div className='flex justify-center'>
            <img className='rounded-full md:ml-36 h-60 w-60' src={Profil}></img>
        </div>
    </div>
  )
}

export default Hero;