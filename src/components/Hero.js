import React from 'react'

export const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row px-10 py-4' >
        <div className='w-full text-center mt-4 md:text-left md:mt-0 md:w-3/4'>
            <h1 className='mb-4 font-bold text-4xl text-white'>I am Kadarisman, <br/> <span className='text-2xl'>Fullstack Web Developer</span></h1>
            <h4 className='mb-6 font-base text-xl text-slate-100'>
            Based in Banda Aceh, Indonesia. Currently, I'm focused on building and maintaining web app at Klik Data Indonesia.
            </h4>
            {/* <button className='bg-sky-700 text-xl hover:bg-sky-900 text-white px-3 py-3 rounded-xl mr-2'>Download Resume</button> */}
            <button className='bg-gradient-to-r from-sky-700 to-sky-500 hover:from-indigo-700 hover:to-indigo-500 text-white px-3 py-1.5 rounded-xl mr-2 mb-3'>My Resume</button>
            <button className='bg-gradient-to-r from-indigo-700 to-indigo-500 hover:from-sky-700 hover:to-sky-500 text-white px-3 py-1.5 rounded-xl mr-2'>My Github</button>
        </div>
        <div className='flex justify-center'>
            <img className='rounded-3xl md:ml-20 h-40 w-40 border border-slate-500 mt-4' src="img/poto.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero;