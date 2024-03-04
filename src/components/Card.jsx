/* eslint-disable react/prop-types */



const Card = (props) => {
    return (
        <div className="bg-green-200 shadow inline-block w-[200px] hover:scale-105 ease-in-out duration-300">
            <img src={props.img}/>
            <div className="m-2 bg-gray-200">
                <span className="font-bold">{`Rs.${props.price}`}</span>
                <span className="block  text-md ">{`${props.name}`}</span>
            </div>
        </div>
    )
}

export default Card;