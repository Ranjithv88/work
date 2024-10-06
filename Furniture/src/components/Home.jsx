import React from 'react'
import './Home.scss'
import NavBar from './navBar/NavBar'
import Intro from './content/intro/Intro'
import PremiumProduct from './content/premiumProduct/PremiumProduct'
import Product from './content/product/Product'
import WebDetails from './content/webDetails/WebDetails'
import {premiumProducts} from './content/Details'
import Blog from './content/blog/Blog'
import Footer from './footer/Footer'

function Home() {
  return (
    <>
        <NavBar />
        <Intro />
        <PremiumProduct />
        <Product />
        <WebDetails />
        <div className="miniDetails">
          {premiumProducts.map((Product,key)=>(
            <div key={key} className="MiniContent">
              <img src={Product.image} alt="" />
              <h1>{Product.name}</h1>
              <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
              <a href="#">Read More</a>
            </div>
          ))}
        </div>
        <Blog />
        <Footer />
    </>
  )
}

export default Home

