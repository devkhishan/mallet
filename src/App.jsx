import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import AddProduct from './components/AddProduct'
import Register from './pages/Register'


function App() {
  return (
    <div className='bg-slate-200'>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/addProduct' element={<AddProduct />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
