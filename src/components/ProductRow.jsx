/* eslint-disable react/prop-types */
import Card from './Card'
import {getProducts} from '../data/productData' 
import {getImageURL}from '../utils/imgaeUtils'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { useRef } from 'react';

const ProductRow = (props) => {

    const scrollRef = useRef();

    const scroll = (scrollOffset) => {  
        scrollRef.current.scrollLeft += scrollOffset;
    }
    const products = getProducts();
    return (
        <div className='mb-10'>
            <div className="ml-[130px] mr-[130px] p-5 pl-[50px] mb-3 rounded-full  bg-red-600 text-white text-2xl font-bold block">
                {`${props.title}`}
            </div>
            <div  className='relative flex items-center pb-3 ml-[60px] mr-[60px] '>
                
                <MdChevronLeft className="chevronMd" size={40} onClick={() => scroll(-600)}/>
            
                <div ref={scrollRef} id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"> 
                    {
                        products.map((product) => (
                            <Card key={product.id} img={getImageURL(product.img)} price={product.price} name={product.name} />
                        ))
                    }
                </div> 

                <MdChevronRight className='chevronMd' size={40} onClick={() => scroll(600)}/>
                
            </div>
        </div>
    )
}
export default ProductRow