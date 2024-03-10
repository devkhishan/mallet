/* eslint-disable react/prop-types */
import {useState} from 'react'


const Card = (props) => {
    const [isFav, setIsFav] = useState(false);

    return (
        <div className="m-2 shadow inline-block w-[200px] relative bg-white ">
            <img src={props.img} className="hover:scale-105 ease-in-out duration-300"/>
            <div className="m-2">
                <span className="font-bold">{`Rs. ${props.price}`}</span>
                <span className="block text-md ">{`${props.name}`}</span>
            </div>
            <div className="badges">
                <span className={`absolute top-0 mt-3 ml-2 cursor-pointer ${isFav?'material-icons text-red-500':'material-symbols-outlined'}`} onClick={() => setIsFav(!isFav)}>favorite</span>
            </div>
        </div>
        
    )
}

export default Card
