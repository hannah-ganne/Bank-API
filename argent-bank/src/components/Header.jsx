import logo from '../assets/images/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav class="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    class="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="/signin" className="main-nav-item">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </Link>
            </div>
        </nav>
    )
}