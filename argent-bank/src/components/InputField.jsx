import { useState } from 'react'

export default function InputField({id, type, size = 20, value, setValue, onKeyPress }) {

    return (
        <input
            type={type}
            id={id}
            size={size}
            onChange={event => setValue(event.target.value)}
            value={value}
            onKeyPress={onKeyPress} 
        />
    )
}