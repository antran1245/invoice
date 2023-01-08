import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import '../sass/sidebar.scss'

interface SidebarProps {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ theme, setTheme }: SidebarProps) {
  return (
    <nav>
      <div className='logo'>
        <Logo />
        <span></span>
      </div>
      <div className='avatarMode'>
        <span className="mode">
          <FontAwesomeIcon icon={(theme ? faSun : faMoon)} onClick={() => setTheme(!theme)} />
        </span>
        <span className='avatar'>
          <img src={require('../assets/image-avatar.jpg')} alt="avatar" />
        </span>
      </div>
    </nav>
  )
}