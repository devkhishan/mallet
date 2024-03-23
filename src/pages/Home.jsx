import Banner from '../components/Banner'
import Body from '../components/Body'
import CategoryNav from '../components/CategoryNav' 

const Home = () => {
    return(
        <div className=''>
            <CategoryNav />
          
            <Banner /> 
       
            <Body />
            
        </div>
    )
}

export default Home