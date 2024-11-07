import React from 'react'
import './Intro.scss'
import Img from '../../../assets/images/couch.png'

function intro() {
  return (
    <main>
        <div className='introDetails'>
            <h1>Modern Interior Design Studio</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, labore quae? Incidunt perferendis quasi fuga adipisci voluptates, quisquam libero. Voluptatibus mollitia aspernatur consequatur esse sunt dolores recusandae incidunt assumenda laudantium.</p>
            <button className='ShopNow'>SHOP NOW</button>
            <button className='Explore'>EXPLORE</button>
        </div>
        <img src={Img} alt="images" />
    </main>
  )
}

export default intro

