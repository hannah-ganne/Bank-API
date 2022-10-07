import logo from '../assets/images/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from '../utils/redux/userSlice'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(logout())
        console.log(user)
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {
                    user.token ?
                    (
                        <div className="header-user">       
                            <Link to="/user" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} />
                            {user.firstName}    
                            </Link>
                            <Link className="main-nav-item" onClick={handleSignOut}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                Sign out
                            </Link>
                        </div>
                    ) :
                    (
                        <Link to="/signin" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} />
                            Sign In
                        </Link>
                    )  
                }
            </div>
        </nav>
    )
}