import React from 'react'
import style from './styles.css'

function InputForm({textLabel, placeholder}) {
  return (
      <div className='input-box'>
          <label for="firstname">{textLabel}</label>
          <input class="textbar" type="text" name="firstname" id="firstname" placeholder={placeholder} ></input>
      </div>

  )
}

export default InputForm