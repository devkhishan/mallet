/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export const FormInput = (props) => {
    return (
        <div className="my-2">
            <label>{props.name}</label><br />
            <input className="p-2 rounded" type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export const FormText = (props) => {
    return (
        <div className="my-2">
            <label>{props.name}</label><br />
            <textarea className="p-2 rounded w-full" type="text" placeholder={props.placeholder}/>
        </div>
    )
}

export const FormSelect = (props) => {
    return (
        <div className="my-2">
            <label>{props.name}</label><br/>
            <select>
                
                {props.options.map((option) => {
                    return (
                        <option value={option}>{option}</option>
                    )
                })}
            </select>
        </div>
    )
}



