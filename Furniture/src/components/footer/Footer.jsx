import React from 'react'
import './Footer.scss'
import Img from '../../assets/images/sofa.png'
import { CiMail } from "react-icons/ci"
import { TbSend } from "react-icons/tb"
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

function Footer() {
  return (
    <footer>
        <div className="Empty"></div>
        <div className='Footer FooterContent01' >
            <div className="foo01">
                <h1><CiMail className='FIcon01'/>&nbsp;Subscribe to Newsletter</h1>
                <input className='FName' type="text" placeholder='Enter the Name' />
                <input className='FEmail' type="email" placeholder='Enter the Email' />
                <button className='FSend'><TbSend /></button>
            </div>
            <img src={Img} alt="" />
        </div>
        <div className='Footer FooterContent02' >
        <div className="foo02">
            <h1>FURNITURE.</h1>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
            <div className="Follow">
                <button className='Instagram'><FaFacebookF /></button>
                <button className='Instagram'><FaInstagram /></button>
                <button className='Twitter'><FaXTwitter /></button>
                <button className='LinkedIn'><FaLinkedinIn /></button>
            </div>
        </div>
        <div className="foo02D2">
            <a href="#">About us</a>
            <a href="#">Support</a>
            <a href="#">Jobs</a>
            <a href="#">Nordic Chair</a>
            <a href="#">Services</a>
            <a href="#">Knowledge base</a>
            <a href="#">Our team</a>
            <a href="#">Kruzo Aero</a>
            <a href="#">Blog</a>
            <a href="#">Live chat</a>
            <a href="#">Leadership</a>
            <a href="#">Ergonomic Chair</a>
            <a href="#" className='fa'>Contact us</a>
            <a href="#" className='fa'>Privacy Policy</a>
        </div>
        </div>
        <div className='Footer FooterContent03' >
            <h1>Copyright ©2024. All Rights Reserved. — Designed with love by <a href="#">RANJ</a></h1>
            <div className="FLastA">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer

