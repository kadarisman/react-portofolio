import React from 'react'

export const Menu = () => {
  return (
    <div className="flex justify-center text-xl md:justify-end text-white">
        <ul className='font-bold  mt-6'>
            <li className="inline mr-9 mt-35">About</li>
            <li className="inline mr-9 mt-35">Skill</li>            
            <li className="inline mr-9 mt-35">Project</li>            
        </ul>
    </div>
  )
}

export default Menu;
