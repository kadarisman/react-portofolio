import React from 'react'
import fb from '../img/icon/facebook.png';
import ig from '../img/icon/instagram.png';
import tw from '../img/icon/twitter.png';
import lik from '../img/icon/linkedin.png';

export const Footer = () => {
  return (
    <div className="flex justify-center">
    <div>
        <div className="flex gap-7 mb-3.5">
            <img className='w-12 h-12' src={fb}/>
            <img className='w-12 h-12' src={ig}/>
            <img className='w-12 h-12' src={tw}/>
            <img className='w-12 h-12' src={lik}/>
        </div>
        <div className="text-center text-sm text-black mb-5">
          Copyright &copy;2022 All rights reserved
        </div>
    </div>
</div>
  )
}

export default Footer;
