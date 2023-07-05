import React from 'react'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import { MyProductContext } from '../../context/ProductContext' 
import { MyCartContext } from '../../context/CartContext'

const ProductItem = ({product, onEditProduct}) => {
  const { onDelProduct } = MyProductContext()
  const { addCart } = MyCartContext()
  const location = useLocation()
  const { productName, unitPrice, thumbnail } = product

  const confirmDelete = (product) => {
    Swal.fire({
      title: 'ต้องการรายการสั่งซื้อนี้หรือไม่',
      icon: 'warning',
      showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed){
        onDelProduct(product)
      }
    })
}

  return (
    <div className='col-md-3 col-sm-6'>
        <img className='img-fluid  rounded' src={thumbnail} />
        <div className='d-flex justify-content-between mt-2 mb-2'>
          <h5 >{productName}</h5>
          <h5 className='title text-end'>{unitPrice} THB</h5>
        </div>
        <div className='d-grid'>
            {location.pathname === '/' &&
            <button className='btn btn-block btn-secondary title' value={unitPrice} onClick={()=>addCart(product)}>
                ซื้อ
            </button>
            }
            <div className='d-grid gap-2'>
              {location.pathname === '/products' &&
              <button className='btn btn-info btn-block title' value={unitPrice} onClick={()=>onEditProduct(product)}>
                  แก้ไข
              </button>
              }
              {location.pathname === '/products' &&
              <button className='btn btn-danger btn-block title' value={unitPrice} onClick={()=>confirmDelete(product)}>
                  ลบ
              </button>
              } 
            </div>  
        </div>
        <hr/>
    </div>
  )
}

export default ProductItem