import Main from '../components/Main'
import Button from '../components/Button'
import Section from '../components/Section'
import Account from '../components/Account'
import { accounts } from '../assets/data/accounts'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, getProfile, editName } from '../utils/redux/userSlice'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import InputField from '../components/InputField'

export default function User() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        if (user.token) {
            dispatch(getProfile({ token: user.token }))
        }
    }, [])
    
    const [open, setOpen] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    useEffect(() => {
        if (user.firstName && user.lastName) {
            setFirstName(user.firstName)
            setLastName(user.lastName)
        }
    }, [])
    const token = user.token
    const handleEditName = (event) => {
        event.preventDefault()
        dispatch(editName({ firstName: firstName, lastName: lastName, token: token }))
        setOpen(false)
    }

    return (
        <Main className="main bg-dark">
            {!user.token && (<Navigate to="/login" replace={true} />)}
            <div className="header">
                <h1>Welcome back<br />{!open && (`${user.firstName} ${user.lastName}!`)}</h1>
                {open ?
                (
                    <form className="edit-name-form" onSubmit={handleEditName}>
                        <InputField value={firstName} setValue={setFirstName} />
                        <InputField value={lastName} setValue={setLastName} />    
                        <Button className="edit-button" label="Save" />
                        <Button className="edit-button" label="Cancel" onClick={() => setOpen(false)} />                        
                    </form>
                ) :
                (
                    <Button className="edit-button" label="Edit Name" onClick={() => setOpen(true)} />
                )
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((item, index) => {
                return (
                    <Section key={item.title} className="account">
                        <Account
                            index={index}
                            title={item.title}
                            amount={item.amount}
                            description={item.description}
                        />
                    </Section>
                )
            })}
        </Main>
    )
}