import React from 'react'

export const Menu = () => {
  return (
    <div className="flex justify-center text-xl md:justify-end">
        <ul className='font-bold  mt-6'>
            <li className="inline mr-9 mt-35">Works</li>
            <li className="inline mr-9 mt-35">Blog</li>
            <li className="inline mr-9 mt-35">Contact</li>            
        </ul>
    </div>
  )
}

export default Menu;
