import { useState } from 'react'

export default function InputField({ id, type, size = 20, onSubmit }) {
    const [value, setValue] = useState('')

    return <input type={type} id={id} size={size} onChange={event => setValue(event.target.value)} value={value} />
}