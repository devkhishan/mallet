
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import CategoryNav from './components/CategoryNav'
import Body from './components/Body'

function App() {
  return (
    <div className='bg-gray-200'>
    <Navbar />
    <CategoryNav />
    <Banner />

    <Body />
    </div>
  )
}

export default App
