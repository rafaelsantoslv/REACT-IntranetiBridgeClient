import React from 'react'
import './styles.css'

function ButtonHome({iconClass, textButton}) {
  return (
    
        
    <a href='funcionario'>
      {textButton}
      <i className={iconClass}></i>
    </a>
        
    
  )
}

export default ButtonHome;