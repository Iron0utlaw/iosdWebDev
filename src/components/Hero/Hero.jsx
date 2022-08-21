import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <Header />
      <div className='hero_text'>
        <h4 className='name'>Harsh Varshney</h4>
        <h1 className='tl'>Web Developer</h1>
      </div>
    </div>
  )
}

export default Hero