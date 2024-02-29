import {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

import banner1 from '../assets/banners/banner-1.jpg'
import banner2 from '../assets/banners/banner-2.jpg'
import banner3 from '../assets/banners/banner-3.jpg'


const Banner = () => {
    const images = [
        { "url": banner1, "id": 1 },
        { "url": banner2, "id": 2 },
        { "url": banner3, "id":3}
    ]

    const [current,setCurrent] = useState(0); 

    const prevSlide = () => {
        setCurrent(current == 0? images.length-1: current-1);
    }

    const nextSlide = () => {
        setCurrent(current == images.length-1? 0: current+1); 
    }
    return (
        <>
        <div className="top-5 relative flex justify-center group">

            <div id="slider" className=' w-[1000px] h-auto relative'>
                <img src={images[current].url} key={images[current].id} className="rounded-3xl w-full h-[400px] inline-block cursor-pointer  p-2" />
                <div className='hidden group-hover:block absolute top-[47%]  left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft size={30} onClick={prevSlide}/>
                </div>
                <div className='hidden group-hover:block absolute top-[47%]  right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight size={30} onClick={nextSlide}/>
                </div>
            </div> 
        </div>
     
        <div className='flex justify-center py-8'>
                {
                    images.map((image, index) => (
                        <div key={index} 
                             className={`text-2xl cursor-pointer  ${index === current ?  "text-red-500" : "text-black hover:scale-150 hover:text-red-500" }`}
                             onClick={()=>(setCurrent(index))}>
                            <RxDotFilled />
                        </div>
                       
                    ))
                }
            </div>
        </>
    )
}

export default Banner