import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from './container/Home';
import Order from './container/order/Order';
import Product from './container/product/Product';
import NotFound from './container/error/NotFound';
import ProductEdit from './container/product/ProductEdit';
import Login from './container/login/Login';
import './App.css'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/orders' exact element={<Order/>}/>
        <Route path='/products' exact element={<Product/>}/>
        <Route path='/products/add' exact element={<ProductEdit/>}/>
        <Route path='/products/edit/:_id' exact element={<ProductEdit/>}/>
        <Route path='/login' exact element={<Login/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
