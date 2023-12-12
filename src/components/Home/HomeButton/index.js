import React from 'react'
import StyledButton from './styles'


function ButtonHome({iconClass, textButton}) {
  return (
    <StyledButton>
        <button>
              <a href='Empregado'>
              <i className={iconClass}></i><br />
              {textButton}
              </a>
            </button>
    </StyledButton>
  )
}

export default ButtonHome;