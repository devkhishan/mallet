import { FaStar } from 'react-icons/fa'

const StarRating = () => {
    // We need to use conditionals jigna for hover and selection
    return (
        <div className='flex items-center' >
            
            {
                [...Array(5)].map((star,index) => (
                    <FaStar size={20} className="inline text-yellow-400" key={index}/>
                ))
            }
            <span className='text-lg ml-4 text-slate-500'>(453 Reviews)</span>
            
        </div>
    )
}

export default StarRating