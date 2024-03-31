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
        <div className='mb-10 container bg-slate-900 rounded-lg space-y-3 pt-9 pb-6'>
            <div className="inline p-3 bg-white justify-evenly text-lg rounded-xl shadow shadow-lg mx-[64px] font-bold">
                {`${props.title}`}
            </div>
            <div  className='relative flex items-center  '>
                
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