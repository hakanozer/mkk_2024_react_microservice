import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Product } from '../models/IProducts'
import Slider from '../components/Slider'
import { allLikes, fncLikes } from '../util/util'
import { useDispatch } from 'react-redux'
import { LikesAction } from '../useRedux/LikesAction'
import { LikesType } from '../useRedux/LikesType'
import { useCartStore } from '../stores/cartStore'

function ProductDetail() {
  
  const {pid} = useParams()
  const location = useLocation()
  const item = location.state as Product
  const dispatch = useDispatch()
  const addItem = useCartStore((state) => state.addItem)

  const likeFnc = () => {
    fncLikes(item.id)
    const arr = allLikes()
    const sendObj: LikesAction = {
      type: LikesType.LIKES_ADD,
      payload: arr
    } 
    dispatch(sendObj)
    addItem(item)
  } 

  return (
    <>
        <div className='row'>
            <div className='col-sm-6'>
                <h2>{item.title}</h2>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <i onClick={likeFnc}  role='button' className="bi bi-suit-heart" style={{fontSize: 30}}></i>
            </div>
            <div className='col-sm-6'>
                <Slider images={item.images}  />
            </div>
        </div>
    </>
  )
}

export default ProductDetail