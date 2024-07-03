import React, { useEffect, useState } from 'react'
import { products } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'

function Dashboard() {

  const [search, setSearch] = useState('')
  const [arrPro, setArrPro] = useState<Product[]>([])
  useEffect(() => {
    products().then(res => {
      const arr = res.data.products
      setArrPro(arr)
    })
  }, [])

  useEffect(() => {
    if (arrPro.length > 0) {
      console.log("arrPro finish", arrPro.length)
    }
  }, [arrPro])

  useEffect(() => {
    console.log(search)
  },[search])

  return (
    <>
      <div className='col-sm-3 mt-3'>
        <input onChange={(evt) => setSearch(evt.target.value)} className='form-control' placeholder='Search..' />
      </div>
      <div className='row'>
        { arrPro.map((item, index) =>
          <ProductItem item={item} key={index} />
        )}
      </div>
    </>
  )
}

export default Dashboard