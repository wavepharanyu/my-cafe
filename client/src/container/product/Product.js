import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/product/ProductList'
import { getUser } from '../../services/authorize'

const Product = () => {
    const navigate = useNavigate()

    const editProduct = (product) =>{
        navigate(`/products/edit/${product._id}`)
    }

    useEffect(()=>{
        !getUser() && navigate('/login')
    },[])

    return (
    <div>
        <Header/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                    <h1>จัดการสินค้า</h1>
                </div>  
                <div className='col-6'>
                    <Link to='/products/add' className='btn btn-success title float-end'>
                        เพิ่มสินค้า
                    </Link>
                </div>
            </div>
            <ProductList onEditProduct={editProduct}/>
        </div>
        <Footer/>
    </div>
    )
}

export default Product