import {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

import banner1 from '../assets/banners/ban-1.png'
import banner2 from '../assets/banners/ban-2.png'
import banner3 from '../assets/banners/ban-3.png'


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

            <div id="slider" className='relative'>      
                <div className='chevron left-5'>
                    <BsChevronCompactLeft size={30} onClick={prevSlide}/>
                </div>

                <img src={images[current].url} key={images[current].id} className="rounded-3xl w-full h-[400px] inline-block cursor-pointer  p-2" />

                <div className='chevron right-5'>
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