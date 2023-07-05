import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const NotFound = () => {
  return (
    <div>
        <Header/>
        <div className='container col-md-8 text-center'>
            <h1 className='mb-4' style={{fontSize: "100px"}}>404</h1>
            <h2 className='mb-4'>Not Found</h2>
            <p className='title mb-5'>ชออภัยไม่พบหน้าที่คุณค้นหา</p>
        </div>
        <Footer/>
    </div>
  )
}

export default NotFound