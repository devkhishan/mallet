import Card from './Card'
import {getProducts} from '../data/productData' 
import {getImageURL}from '../utils/imgaeUtils'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const ProductRow = () => {
    const products = getProducts();
    return (
        <div className='bg-green-400 relative flex items-center'>
            <MdChevronLeft size={40} />
          
            <div id="slider" className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"> 
                {
                    products.map((product) => (
                        <Card key={product.id} img={getImageURL(product.img)} price={product.price} name={product.name} />
                    ))
                }
            </div> 

            <MdChevronRight size={40}/>
            
        </div>
    )
}
export default ProductRow