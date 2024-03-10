/* eslint-disable react/prop-types */
const Button = (props) => {
    return( 
        <button className={`button ${props.fill=="true"?"bg-red-500 text-white":"text-red-500"} w-[${props.width}] `}>{`${props.text}`}</button>
    )
}

export default Button