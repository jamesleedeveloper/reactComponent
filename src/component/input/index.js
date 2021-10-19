import React from "react"

const Input = (props) => {
    let inputElement
    switch (props.elementType) {
        case ('input'):
            inputElement = <>
                <label>{props.label}</label>
                <input
                    onChange={props.onChange}
                    type={props.type}
                    value={props.value}
                />
            </>
            break;
        case ('select'):
            inputElement = <>
                <label>{props.label}</label>
                <select name="cars" id="cars"  onChange={props.onChange}>
                    {props.config.options.map((data, idx) => (
                        <option value={data.value} key={idx}>{data.value}</option>
                    ))}
                </select>
            </>
            break;
        default:
            break;
    }
    return (
        <>
            {inputElement}
        </>
    )
}

export default Input