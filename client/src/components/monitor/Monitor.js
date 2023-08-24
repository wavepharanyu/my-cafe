import React, { useState } from 'react'
import Calculator from './Calculator'
import ProductList from '../product/ProductList'

const Monitor = () => {
  return (
    <div className='container-fluid'>
        <div className='d-flex'>
            <div className='col-md-9'>
                <ProductList  />
            </div>
            <div className='col-md-3'>
                <Calculator />
            </div>
        </div>
    </div>
  )
}

export default Monitor