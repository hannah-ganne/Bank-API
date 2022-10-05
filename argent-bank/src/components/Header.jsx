import logo from '../assets/images/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <nav class="main-nav">
            <a class="main-nav-logo" href="./index.html">
                <img
                class="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a class="main-nav-item" href="./sign-in.html">
                <FontAwesomeIcon icon={faUserCircle} />
                Sign In
                </a>
            </div>
        </nav>
    )
}