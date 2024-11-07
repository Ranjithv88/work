import React from 'react'
import './WebDetails.scss'
import { FiTruck,FiShoppingBag } from "react-icons/fi"
import { HiOutlineSupport } from "react-icons/hi"
import { CgInfinity } from "react-icons/cg"
import Img from '../../../assets/images/why-choose-us-img.jpg'

function WebDetails() {
  return (
    <div className='WebDetails'>
        <div className='WebDetailsOuter'>
            <div className='Web Details01'>
                <h1>Why Choose Us</h1>
                <p>We take pride in offering only the highest quality products. Our selection process ensures that every item meets strict standards for durability, design, and functionality.</p>
            </div>
            <div className='Web Details02'>
                <span><FiTruck className='WhyIcon'/><h5>&nbsp;</h5></span>
                <h1>Fast & Free Shopping</h1>
                <p>We know how important quick delivery is, which is why we offer Fast & Free Shipping on all orders. No hidden fees, no surprises—just a smooth shopping experience.</p>
            </div>
            <div className='Web Details03'>
                <span><FiShoppingBag className='WhyIcon'/><h5>&nbsp;</h5></span>
                <h1>Easy to Shop</h1>
                <p>We’ve designed our website with you in mind—making shopping as easy and enjoyable as possible.</p>
            </div>
            <div className='Web Details04'>
                <span><HiOutlineSupport className='WhyIcon'/><h5>&nbsp;</h5></span>
                <h1>24/7 Support</h1>
                <p>We’re here for you, any time of the day or night. Our dedicated customer support team is available 24/7 to assist you with any questions, concerns, or issues.</p>
            </div>
            <div className='Web Details05'>
                <span><CgInfinity className='WhyIcon'/><h5>&nbsp;</h5></span>
                <h1>Free Resources</h1>
                <p>We believe in giving more than just great products—we also provide Free Resources to help you make the most of your shopping experience.</p>
            </div>
            <button>Read More&nbsp;&gt;</button>
        </div> 
        <img src={Img} alt="" />
    </div>
  )
}

export default WebDetails

