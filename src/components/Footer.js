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
            <a href="https://www.facebook.com/yuzar.programmer.kaligrafer" target='_blank' rel="noopener noreferrer">
              <img className='w-8 h-8' src={fb} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/risman_yuzar/?igshid=YmMyMTA2M2Y%3D" target='_blank' rel="noopener noreferrer">
              <img className='w-8 h-8' src={ig} alt="instagram" />
            </a>
            <a href="www.linkedin.com/in/kadarisman-yuzar-a1706a120" target='_blank' rel="noopener noreferrer">
              <img className='w-8 h-8' src={lik} alt="likedin" />
            </a>
        </div>
        <div className="text-center text-sm text-black mb-5">
          &copy; {new Date().getFullYear()} Kadarisman
        </div>
    </div>
</div>
  )
}

export default Footer;
