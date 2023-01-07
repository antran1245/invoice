import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import '../sass/sidebar.scss'

export default function Sidebar() {
  return (
    <nav>
      <div className='logo'>
        <Logo />
        <span></span>
      </div>
      <div className='avatarMode'>
        <span className="mode">
          <FontAwesomeIcon icon={faMoon} />
        </span>
        <span className='avatar'>
          <img src={require('../assets/image-avatar.jpg')} alt="avatar" />
        </span>
      </div>
    </nav>
  )
}