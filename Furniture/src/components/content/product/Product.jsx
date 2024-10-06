import React from 'react'
import './Product.scss'
import {products} from '../Details'

function Product() {
  return (
    <div className='Product'>
      <h1>Our Products</h1>
        <div className='ProductOuter'>
            {products.map((product,key)=>(
                <div key={key} className='ProductList01'>
                    <img src={product.image} alt="" />
                    <h1>{product.name}</h1>
                    <h2>${product.price}.00</h2>
                    <button className='AddToCart'>Add to Cart</button>
                </div>
            ))}
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur alias odit temporibus, nesciunt atque vero officia repudiandae laboriosam sit repellat porro modi, sunt similique sapiente quod impedit dolorum quibusdam accusantium.</p>
    </div>
  )
}

export default Product

