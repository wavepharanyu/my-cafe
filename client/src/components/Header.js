import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, logout } from '../services/authorize'

const Header = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date())

    const style = { height : "70px", marginBottom: "5px" }

    const refreshClock = () => {
        setDate(new Date())
    }

    useEffect(() => {
        const tick = setInterval(refreshClock,1000)
        return () => clearInterval(tick);
    },[])

  return (
    <div className='container-fluid border-bottom mb-3'>
        <div className='d-flex align-items-center'>
            <div className='col-8 text-start'>
                <Link className='text-decoration-none' to='/'><h1 className='text text-success'><img style={style} src="/images/logo/logo.png" alt="logo"/>My Cafe </h1></Link>
            </div>
            <div className='col-4 text-end'>
                <h5 className='text-muted '>{date.toLocaleTimeString()}</h5>
                <ul className='list-inline'> 
                    <li className='list-inline-item title'><Link className="text-primary text-decoration-none" to='/'>หน้าหลัก</Link></li>
                    {getUser() && 
                    <span>
                        <li className='list-inline-item title'>|</li>
                        <li className='list-inline-item title'><Link className="text-primary text-decoration-none" to='/orders'>รายการสั่งซื้อ</Link></li>
                        <li className='list-inline-item title'>|</li>
                        <li className='list-inline-item title me-2'><Link className="text-primary text-decoration-none" to='/products'>สินค้า</Link></li>
                    </span>
                    }
                    {!getUser() && 
                    <span>
                        <li className='list-inline-item title'>|</li>
                        <li className='list-inline-item title'><Link className="text-primary text-decoration-none" to='/login'>เข้าสู่ระบบ</Link></li>
                    </span>
                    } 
                    {getUser() && <span>
                        <li className='list-inline-item title'>|</li>
                        <li className='list-inline-item title text-primary cursor-pointer' onClick={() => logout(() => navigate('/'))}><span type="button">ออกจากระบบ</span></li>
                    </span>} 
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Header