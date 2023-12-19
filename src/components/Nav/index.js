import React, { useContext } from 'react'
import logo from '../../assets/LogoIbridge.png'
import './styles.css'
import { AuthContext } from '../../context/auth'



function Nav() {

  const {signOut} = useContext(AuthContext)
  return (
          <nav className='nav'>
            <a className='logo' href="#">
              <img src={logo} alt='Logo iBridge' />
            </a>
            <button className='btn-logout' onClick={signOut}>
              <span>Sair</span> <i class="bi bi-box-arrow-right"></i>
            </button>
          </nav>
  )
}

export default Nav