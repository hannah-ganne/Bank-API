import InputField from '../components/InputField'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setCategory, setNotes } from '../utils/redux/transactionSlice'

export default function TransactionContent({ type, category, notes }) {
    const [editCategory, setEditCategory] = useState(false)
    const [editNotes, setEditNotes] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
            <p>Transaction Type: {type}</p>
            <p>Category: {
                editCategory
                ? <InputField type="text" onSubmit={dispatch(setCategory)} />
                : category} {<FontAwesomeIcon icon={faPencil} onClick={() => setEditCategory(true)} />}</p>
            <p>Notes: {
                editNotes
                ? <InputField type="text" size={80} onSubmit={dispatch(setNotes)} />
                : notes} {<FontAwesomeIcon icon={faPencil} onClick={() => setEditNotes(true)} />}</p>
        </>
    )
}