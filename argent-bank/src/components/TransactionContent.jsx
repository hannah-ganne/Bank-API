import InputField from '../components/InputField'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { setCategory, setNotes } from '../utils/redux/transactionSlice'
import { useDispatch } from 'react-redux'

export default function TransactionContent({ index, type, category, notes }) {

    const [editCategory, setEditCategory] = useState(false)
    const [categoryValue, setCategoryValue] = useState('')
    const [editNotes, setEditNotes] = useState(false)
    const [notesValue, setNotesValue] = useState('')
    const dispatch = useDispatch()

    return (
        <>
            <p>Transaction Type: {type}</p>
            <p>Category: {
                editCategory
                ? <InputField
                    type="text"
                    value={categoryValue}
                    setValue={setCategoryValue}
                    onKeyPress={(event) => {
                        if (event.charCode === 13) {
                            dispatch(setCategory({id: index, category: categoryValue}))
                            setEditCategory(false)
                            }
                        }} 
                    />
                : category} {<FontAwesomeIcon icon={faPencil} onClick={() => setEditCategory(true)} />}</p>
            <p>Notes: {
                editNotes
                ? <InputField
                    type="text"
                    size={80}
                    value={notesValue}
                    setValue={setNotesValue}
                    onKeyPress={(event) => {
                    if (event.charCode === 13) {
                        dispatch(setNotes({id: index, notes: notesValue}))
                        setEditNotes(false)
                        }
                    }}     
                />
                : notes} {<FontAwesomeIcon icon={faPencil} onClick={() => setEditNotes(true)} />}</p>
        </>
    )
}