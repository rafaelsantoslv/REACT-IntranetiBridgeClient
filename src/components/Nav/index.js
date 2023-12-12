import React from 'react'
import logo from '../../assets/LogoIbridge.png'
import StyledNav from './styles'




function Nav() {
  return (
    <StyledNav>
        <header>
          <nav className='nav'>
            <a className='logo' href="#"><img src={logo} alt='Logo iBridge' /></a>
            <ul className='nav-list'>
              <li><a href='#'>Logout</a></li>
            </ul>
          </nav>
        </header>
    </StyledNav>
  )
}

export default Nav