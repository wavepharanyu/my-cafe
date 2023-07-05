import React, {useEffect} from 'react'
import ProductItem from './ProductItem'
import { MyProductContext } from '../../context/ProductContext'

const ProductList = ({onEditProduct}) => {
  const { products, isFetching, fetchProduct } = MyProductContext()  
  
  useEffect(()=>{
    fetchProduct()
  },[])
  
  return (
    <div className='row'>
        {!isFetching && products.map(product=>{
            return <ProductItem product={product} key={product.productId} onEditProduct={onEditProduct}/>}
        )}
    </div>
  )
}

export default ProductList