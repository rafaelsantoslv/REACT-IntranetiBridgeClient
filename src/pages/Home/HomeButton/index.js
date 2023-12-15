import React from 'react'
import './styles.css'

function ButtonHome({iconClass, textButton}) {
  return (
    
    <div className='buttonClass'>
      <a className='buttonLink' href='funcionario'>
      {textButton}
      <i className={iconClass}></i>
    </a>
    </div>

        
    
  )
}

export default ButtonHome;