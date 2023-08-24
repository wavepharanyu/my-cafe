import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Swal from 'sweetalert2'
import { MyOrderContext } from '../../context/OrderContext'
import { getUser } from '../../services/authorize'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const {orders,onDelOrder,isFetching,fetchOrder} = MyOrderContext()
    const confirmDelete = (order) => {
        Swal.fire({
          title: 'ต้องการรายการสั่งซื้อนี้หรือไม่',
          icon: 'warning',
          showCancelButton: true
        }).then((result)=>{
          if(result.isConfirmed){
            onDelOrder(order)
          }
        })
    }

    const navigate = useNavigate()

    useEffect(()=>{ 
        if(getUser()){
            fetchOrder()
        }
        else{
            navigate('/login')
        }
    },[])


    const showOrder = () => {
        return orders.map((order)=>{
            const date = new Date(order.orderedDate)
            return(
                <div key={order._id} className='col-md-3'>
                    <hr/>
                    <div className='float-end'>
                        <button className="btn btn-danger btn-sm title" onClick={()=>confirmDelete(order)}>X</button>
                    </div>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map((item)=>{
                            return(
                                <li className='title' key={item._id}>
                                    {item.product.productName} x {item.quantity} = {item.product.unitPrice * item.quantity} THB
                                </li>
                            )
                        })}
                    </ul>
                    <p className='title'>ยอดรวม {order.totalPrice} THB</p>
                </div>
            )
        })
    }

    return (
        <div>
            <Header/>
            <div className='container-fluid m-1'>
                <h1>รายการสั่งซื้อ</h1>
                <div className='row'>
                    {!isFetching&& showOrder()}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Order