import React from 'react'
import { Product } from '../models/IProducts'
import { NavLink, useNavigate } from 'react-router-dom'

function ProductItem( props: {item: Product} ) {

  const navigate = useNavigate()
  const gotoDetail = () => {
    navigate('/detail/'+props.item.id, {state: props.item})
  }
  
  return (
    <div className='col-sm-3'>
        <div className="card">
            <img src={props.item.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{props.item.title}</h5>
            <p className="card-text">{props.item.price}</p>
            {/*<NavLink to={'/detail/'+props.item.id} className="btn btn-primary" >Detail</NavLink> */}
            <div role='button' onClick={gotoDetail} className="btn btn-primary" >Detail</div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem