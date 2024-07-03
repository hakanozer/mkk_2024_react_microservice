import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Product } from '../models/IProducts'
import Slider from '../components/Slider'

function ProductDetail() {
  
  const {pid} = useParams()
  const location = useLocation()
  const item = location.state as Product

  return (
    <>
        <div className='row'>
            <div className='col-sm-6'>
                <h2>{item.title}</h2>
                <div>{item.description}</div>
                <div>{item.price}</div>
            </div>
            <div className='col-sm-6'>
                <Slider images={item.images}  />
            </div>
        </div>
    </>
  )
}

export default ProductDetail