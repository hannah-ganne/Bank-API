import Main from '../components/Main'
import Section from '../components/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Signin() {
    return (
        <Main className="main bg-dark">
            <Section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon"/>
                <h1>Sign In</h1>
                <form>
                    <div class="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div class="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div class="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    <button class="sign-in-button">Sign In</button>
                </form>
            </Section>   
        </Main>
    )
}