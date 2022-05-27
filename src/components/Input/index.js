import React from "react";

const Input = (props) => {
    const {name, type, placeholder, value, onInputChange} = props

    return (
        <div className='form__input-box'>
            <input className='form-input' value={value} onChange={e => onInputChange(e.target.value)} type={type} placeholder={placeholder}/>
            <label className='form-input__label'>{name}</label>
        </div>
    )
}

export default Input;