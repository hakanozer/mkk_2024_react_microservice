import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { IProducts, Product } from '../models/IProducts'
import { searchProduct } from '../services/productService'
import ProductItem from '../components/ProductItem'

function Search() {

  const [arrPro, setArrPro] = useState<IProducts>()

  const [params] = useSearchParams()
  useEffect(() => {
     const q = params.get('q')
     console.log("this line", q)
     if (q) {
        searchProduct(q).then(res => {
            const dt = res.data
            setArrPro(dt)
        })
     }
  }, [params])
  return (
    <>
        <div>Total: { arrPro && arrPro.total}</div>
        <div className='row'>
        { arrPro && arrPro.products.map((item, index) =>
          <ProductItem item={item} key={index} />
        )}
      </div>
    </>
  )
}

export default Search