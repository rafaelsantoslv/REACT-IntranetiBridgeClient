import React from 'react'
import logo from '../../assets/LogoIbridge.png'
import './styles.css'




function Nav() {
  return (
          <nav className='nav'>
            <a className='logo' href="#">
              <img src={logo} alt='Logo iBridge' />
            </a>
            <button className='btn-logout'>
              <span>Sair</span> <i class="bi bi-box-arrow-right"></i>
            </button>
          </nav>
  )
}

export default Nav