import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

function ButtonHome({iconClass, textButton, href}) {
  return (
    
    <div className='buttonClass'>
      <Link className='buttonLink' to={href}>
      {textButton}
      <i className={iconClass}></i>
    </Link>
    </div>

        
    
  )
}

export default ButtonHome;