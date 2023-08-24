import React from 'react'
import { MyCartContext } from '../../context/CartContext'

const Calculator = () => {
    const {CartList,totalPrice,resetCart,onDelCart,onConfirmOrder} = MyCartContext()
    const showOrders = (orders) => {
        if(!CartList || CartList.length === 0){
            return <li className='text-end text-muted title'>ไม่มีสินค้า</li>
        }
        else{
            return CartList.map((item)=>{
                return(
                    <li className='text-end text-success title'>
                        {item.product.productName} x {item.quantity} = {item.product.unitPrice*item.quantity} THB
                        <button className='btn btn-light btn-sm bg-white border-0' onClick={()=>onDelCart(item.product)}>X</button>
                    </li>
                )
            })
        }
    }
  return (
    <div className='container'>
        <h1 className='text-end'>{totalPrice} THB</h1>
        <hr/>
        <ul className='list-unstyled'>
           {showOrders(CartList)}
        </ul>
        <hr/>
        <div className='d-grid gap-2'>
            <button className='btn btn-block btn-success title' onClick={()=>onConfirmOrder()}>ยืนยัน</button>
            <button className='btn btn-block btn-secondary title' onClick={()=>resetCart()}>ยกเลิก</button>
        </div>
    </div>
  )
}

export default Calculator