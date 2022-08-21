import React from 'react'
import './Header.css'
import { RiHome2Fill } from 'react-icons/ri'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <RiHome2Fill className='logo' size={20} />
        <div className='nav'>
          <span className='child0'> <RiHome2Fill size={20} /> <span className='nav_text'>Home</span> </span>
          <span className='child'> <RiHome2Fill size={20} /> <span className='nav_text'>Work</span> </span>
          <span className='child2'> <RiHome2Fill size={20} /> <span className='nav_text'>Contact</span> </span>
        </div>
        <RiHome2Fill className='res' size={40} />
      </div>
    </div>
  )
}

export default Header