import {getImageURL} from '../utils/imgaeUtils'
import {useState} from 'react'
import StarRating from './StarRating'
const ProductPageHeader = () => {

    const [currentImage, setCurrentImage] = useState(getImageURL('laptop.png')); 
    const set = (image) => {
        setCurrentImage(getImageURL(image));
    }
    return (
        <div className="grid grid-cols-7 ml-[250px] mr-[250px] mb-[50px] mt-[50px]">

            <div className="productImage col-span-3 bg-green-400 justify-center items-center"> 
                
                
                <div className='p-5 col-span-5 bg-blue-400'>
                    <img src={currentImage}  className="" alt="product" />
                </div>
                <div className='sec-display grid grid-cols-4 gap-5 bg-orange-400 p-5'>
                    <img src={getImageURL('laptop.png')}  onClick={()=>set('laptop.png')} alt="product" />
                    <img src={getImageURL('mobile.png')}  onClick={() => set('mobile.png')} alt="product" />
                    <img src={getImageURL('watch.png')}   onClick={()=>set('watch.png')} alt="product" />
                    <img src={getImageURL('mobile-0.png')}  onClick={()=>set('mobile-0.png')} alt="product" />
                </div>
            </div>


            <div className="col-span-4  bg-green-400 p-5">

                <div className="productBrief h-full bg-white p-5">
                    <h1 className='text-4xl font-bold'>Apple Watch Series 6</h1>
                    <div className="sellerDetails flex my-2">
                        <h3 className=''>Sold by <span className='font-bold'>Apple</span></h3> 
                        <span className='material-icons pl-2 text-sky-500'>verified</span>   
                    </div>
                    <div className='my-2'>
                        <StarRating />
                    </div>
                    <p className='my-2 text-slate-600'> &emsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur at, ratione nulla asperiores excepturi, dolor deserunt neque aliquid ut eos ipsum. Qui cumque dolorum quo assumenda illum voluptates ratione! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fuga maxime placeat.</p>

                    <p className='font-bold'>Availability : <span className="text-green-700">In Stock</span></p>
                    <p className='font-bold'>Brand : <span className='ml-2 font-normal'>Apple</span></p>
                    <p className='font-bold'>Category : <span className='ml-2 font-normal'>Electronics</span></p>
                    <p className='font-bold'>Model : <span className='ml-2 font-normal'>UXL98032</span></p>

                    <p className='text-2xl font-bold my-2 text-red-500'>$10.00</p> 

                    <div className="size">
                        <p className='text-xl font-bold'>Size</p>
                        <div className="flex items-center">
                            <div className=" border border-slate-600 p-2 m-2 ml-0 w-[40px] text-center rounded">S</div>
                            <div className=" border border-slate-600 p-2 m-2 w-[40px] text-center rounded">M</div>
                            <div className="w-[40px] text-center  border border-slate-600 p-2 m-2 rounded">L</div>
                            <div className=" border bg-red-600 text-center text-white border-black p-2 m-2 rounded w-[40px] ">XL</div>
                        </div>
                    </div>

                    <div className="color">
                        <p className='text-xl font-bold'>Size</p>
                        <div className="flex items-center">
                            <div className='w-[40px] border-2 border-black bg-purple-500 h-[40px] m-2 ml-0 rounded'></div>
                            <div className='w-[40px] bg-orange-500 h-[40px] m-2 rounded'></div>
                            <div className='w-[40px] bg-blue-500 h-[40px] m-2 rounded'></div>
                            <div className='w-[40px] bg-green-500 h-[40px] m-2 rounded'></div>
                            
                        </div>
                    </div>

                    <div className="buttons flex my-3"> 
                        
                        <button className="button w-[200px] text-white p-2 bg-red-500">Add to Cart</button>

                        <button className="button w-[200px] justify-center flex p-2"><span className="material-icons text-red-500  mr-2">favorite</span>Wishlist</button>
                    </div>
                    
                    

                    
                    <div className="pl-2 address my-2">
                        <h2>Delivery to <span className='font-bold underline'>Chennai - 600039.</span></h2>
                    </div>
                </div>
                
            </div> 
            
        </div>
    )
}

export default ProductPageHeader