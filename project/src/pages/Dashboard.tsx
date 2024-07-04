import React, { ElementRef, useContext, useEffect, useRef, useState } from 'react'
import { products } from '../services/productService'
import { Product } from '../models/IProducts'
import ProductItem from '../components/ProductItem'
import { TokenContext } from '../util/TokenContext'
import { Helmet } from 'react-helmet'

function Dashboard() {

  const tokenContext = useContext(TokenContext)
  const searchRef = useRef<ElementRef<'input'>>(null)
  const [search, setSearch] = useState('')
  const [arrPro, setArrPro] = useState<Product[]>([])
  useEffect(() => {
    if (searchRef) {
      searchRef.current?.focus()
    }
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
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard Detail" />
      </Helmet>
      {tokenContext.token}
      <div className='col-sm-3 mt-3 mb-3'>
        <input ref={searchRef} onChange={(evt) => setSearch(evt.target.value)} className='form-control' placeholder='Search..' />
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