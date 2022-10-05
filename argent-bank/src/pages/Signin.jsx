import Main from '../components/Main'
import Section from '../components/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Input from '../components/Input'
import InputTitle from '../components/InputTitle'
import InputField from '../components/InputField'
import Button from '../components/Button'

export default function Signin() {
    return (
        <Main className="main bg-dark">
            <Section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon"/>
                <h1>Sign In</h1>
                <form>
                    <Input className="input-wrapper">
                        <InputTitle id="username" label="Username" />
                        <InputField id="username" type="text" />
                    </Input>
                    <Input className="input-wrapper">
                        <InputTitle id="password" label="Password" />
                        <InputField id="password" type="password" />
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