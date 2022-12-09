
import React from 'react'
import Product from './Product.js';

export default function ProductList(props)
{
  // console.log(props);
  return (
    props.productList.length > 0 ?
    props.productList.map((product,idx)=>{
      return <Product product = {product}  key={idx} 
      incrementQuantity={props.incrementQuantity} 
      decrementQuantity={props.decrementQuantity}
      removeItem={props.removeItem}   
      index={idx} 
      />
    })
    : <h1>No Product found in the Carts</h1>
  )
}

