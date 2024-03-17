import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div className='bg-gray-200'>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/addProduct' element={<AddProduct />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
