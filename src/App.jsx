
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CategoryNav from './components/CategoryNav'
import ProductRow from './components/ProductRow'

function App() {
  return (
    <div className='bg-gray-200'>
    <Navbar />
    <CategoryNav />
    <Banner />
    <ProductRow />
    </div>
  )
}

export default App
