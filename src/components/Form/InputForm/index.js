import React from 'react'
import style from './styles.css'

function InputForm({textLabel, placeholder, type}) {
  return (
      <div className='input-box'>
          <label for="firstname">{textLabel}</label>
          <input class="textbar" type={type} name="firstname" id="firstname" placeholder={placeholder} />
      </div>

  )
}

export default InputForm