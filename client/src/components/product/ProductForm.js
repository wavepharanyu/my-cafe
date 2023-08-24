import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { MyFormContext } from '../../context/FormContext'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../../services/authorize'

const ProductForm = () => {
    const { productName, unitPrice, thumbnail, createProduct, inputName, inputPrice, inputThumbnail, fetchSingleProduct, initData, updateProduct } = MyFormContext()
    const {_id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(getUser()){
            if(_id){
                fetchSingleProduct(_id)
            }
            else{
                initData()
            }
        }
        else{
            navigate('/login')
        }

    },[])

  return (
    <div>
        <h2>{_id ? "แก้ไขสินค้า" : "เพิ่มสินค้า"}</h2>
        <form onSubmit={(e) => {_id ? updateProduct(e,_id) : createProduct(e)}}>
            <div className='form-group mb-3'>
                <label className='title'>ชื่อสินค้า</label>
                <input type="text" className='form-control' value={productName || ''} onChange={(e)=>inputName(e.target.value)}/>
            </div>
            <div className='form-group mb-3'>
                <label className='title'>ราคาสินค้า</label>
                <input type="text" className='form-control' value={unitPrice || ''} onChange={(e)=>inputPrice(e.target.value)}/>
            </div>
            <div className='form-group mb-3'>
                <label className='title'>รูปภาพสินค้า</label>
                <input type="text" className='form-control' value={thumbnail || ''} onChange={(e)=>inputThumbnail(e.target.value)}/>
            </div>
            <input type='submit' value='บันทึก' className='btn btn-info w-100 title'/>
        </form>
    </div>
  )
}

export default ProductForm