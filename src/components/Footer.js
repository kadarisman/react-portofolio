import React from 'react'
import fb from '../img/icon/facebook.png';
import ig from '../img/icon/instagram.png';
//import tw from '../img/icon/twitter.png';
import lik from '../img/icon/linkedin.png';

export const Footer = () => {
  return (
    <div className="flex justify-center">
    <div>
        <div className="flex gap-7 mb-3.5">
            <img className='w-8 h-8' src={fb} alt="facebook" />
            <img className='w-8 h-8' src={ig} alt="instagram" />
            <img className='w-8 h-8' src={lik} alt="likedin" />
        </div>
        <div className="text-center text-sm text-black mb-5">
          &copy; {new Date().getFullYear()} Kadarisman
        </div>
    </div>
</div>
  )
}

export default Footer;
