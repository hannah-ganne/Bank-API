import Main from '../components/Main'
import Button from '../components/Button'
import Section from '../components/Section'
import Account from '../components/Account'
import { accounts } from '../assets/data/accounts'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, getProfile } from '../utils/redux/userSlice'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function User() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        if (user.token) {
            dispatch(getProfile({ token: user.token }))
        }
    },[])

    return (
        <Main className="main bg-dark">
            {!user.token && (<Navigate to="/" replace={true} />)}
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                <Button className="edit-button" label="Edit Name" />
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map(item => {
                return (
                    <Section key={item.title} className="account">
                        <Account
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