import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MyAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../services/authorize'

const Login = () => {
  const { initData, username, password, inputUsername, inputPassword, submitForm } = MyAuthContext()
  const navigate = useNavigate()
  
  useEffect(()=>{
    initData()
    getUser() && navigate('/')
  },[])

  return (
    <div>
        <Header/>
          <div className='container w-25 mb-5'>
            <h1 className='mb-3'>เข้าสู่ระบบ</h1>
            {/* <p className='text-danger title'>*กรอกคำว่า "admin" ในช่อง password (username อะไรก็ได้) </p> */}
            <form onSubmit={(e)=>submitForm(e,()=>navigate('/products'))}>
              <div className='form-group mb-3'>
                  <label className='title mb-1'>Username</label>
                  <input type="text" className='form-control' value={username || ''} onChange={(e)=>inputUsername(e.target.value)}/>
              </div>
              <div className='form-group mb-3'>
                  <label className='title mb-1'>Password</label>
                  <input type="password" className='form-control' value={password || ''} onChange={(e)=>inputPassword(e.target.value)}/>
              </div>
              <input type='submit' value='เข้าสู่ระบบ' className='btn btn-info w-100 title'/>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Login