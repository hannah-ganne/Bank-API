import Main from '../components/Main'
import Section from '../components/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Input from '../components/Input'
import InputTitle from '../components/InputTitle'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login } from '../utils/redux/userSlice'
import { Navigate } from 'react-router-dom'

export default function Signin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(login({ email: username, password: password }))
    }

    return (
        <Main className="main bg-dark">
            <Section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon"/>
                <h1>Sign In</h1>
                {user.hasError && <p>There is an error</p>}
                {(user.token && !user.isLoading && !user.hasError) && (
                    <Navigate to="/user" replace={true} />
                )}
                <form onSubmit={handleSubmit}>
                    <Input className="input-wrapper">
                        <InputTitle id="username" label="Username" />
                        <InputField id="username" type="text" value={username} setValue={setUsername} />
                    </Input>
                    <Input className="input-wrapper">
                        <InputTitle id="password" label="Password" />
                        <InputField id="password" type="password" value={password} setValue={setPassword} />
                    </Input>
                    <Input className="input-remember">
                        <InputField id="remember-me" type="checkbox" />
                        <InputTitle id="remember-me" label="Remember me" />
                    </Input>
                    <Button className="sign-in-button" label="Sign In" />
                </form>
            </Section>   
        </Main>
    )
}