import React from 'react'
import { Link } from 'react-router-dom'
import {ContainerNav} from './styles'
function NavLateral() {
  return (
    <div>
        <ContainerNav>
          <ul>
            <li>
              <Link to="/home">
              Painel
              <i className='bi bi-send'></i>
              </Link>
            </li>
          </ul>
        </ContainerNav>
      </div>
  )
}

export default NavLateral