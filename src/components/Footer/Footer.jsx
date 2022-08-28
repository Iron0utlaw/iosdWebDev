import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
    return (
        <div className='foot'>
            <span>Harsh Varshney @ 2022 </span>
            <div className="line"></div>
            <div className="socials">
                <a target="_blank" href="https://www.instagram.com/harsh__8133/"><BsInstagram/></a>
                <a target="_blank" href="https://www.linkedin.com/in/harsh-varshney-85138a224/"><BsLinkedin /></a>
                <a target="_blank" href="https://twitter.com/IronOutlaww"><BsTwitter/></a>
            </div>
        </div>
    )
}

export default Footer