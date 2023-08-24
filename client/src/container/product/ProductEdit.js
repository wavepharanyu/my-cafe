import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductForm from '../../components/product/ProductForm'

const ProductEdit = () => {
  return (
    <div>
        <Header/>
        <div className='container col-md-5'>
            <ProductForm />
        </div>
        <Footer/>
    </div>
  )
}

export default ProductEdit