import React from 'react'
import './PremiumProduct.scss'
import {premiumProducts} from '../Details'

function PremiumProduct() {
  return (
    <div className='PremiumProduct'>
        <div className='ProductList'>
            <div>
                <h1>Crafted With excellent material.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat! Similique sint voluptatibus adipisci eaque laboriosam adipisci eaque laboriosam.</p>
                <button>Explore</button>
            </div>
            {premiumProducts.map((product,key)=>(
                <div key={key} className='List'>
                    <img src={product.image} alt="" />
                    <h1>{product.name}</h1>
                    <h1 className='h2'>${product.price}.00</h1>
                    <button className='AddToCart'>Add to Cart</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PremiumProduct

