import React from 'react'
import './Blog.scss'
import Img01 from '../../../assets/images/post-1.jpg'
import Img02 from '../../../assets/images/post-2.jpg'
import Img03 from '../../../assets/images/post-3.jpg'

function Blog() {
  return (
    <div className='Blog'>
        <h1>Recent Blog</h1>
        <a href="#">View All Posts</a>
        <div className='BlogContent'>
            <img src={Img01} alt="" />
            <h3>First Time Home Owner Ideas</h3>
            <h3><span>by</span> Kristin Watson <span>on</span> Dec 19, 2021</h3>
        </div>
        <div className='BlogContent'>
            <img src={Img02} alt="" />
            <h3>How To Keep Your Furniture Clean</h3>
            <h3><span>by</span> Robert Fox <span>on</span> Dec 15, 2021</h3>
        </div>
        <div className='BlogContent'>
            <img src={Img03} alt="" />
            <h3>Small Space Furniture Apartment Ideas</h3>
            <h3><span>by</span> Kristin Watson <span>on</span> Dec 12, 2021</h3>
        </div>
    </div>
  )
}

export default Blog

