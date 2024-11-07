import React from 'react'
import './NavBar.scss'
import { CgProfile } from "react-icons/cg"
import { LuShoppingCart } from "react-icons/lu"
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <header>
        <nav>
            <h1>FURNITURE.</h1>
            <div className='Menu'>
                <ul className='nav'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact US</li>
                </ul>
                <ul className='profile'>
                <Link to='/LogIn'><span><CgProfile /></span></Link>
                <span><LuShoppingCart /></span>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar

