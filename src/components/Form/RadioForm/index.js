import React from 'react'
import style from './style.css'
function RadioForm({nameRadio, groupRadio}) {
  return (
    <div className='gender-input'>
        <label for='female'>{nameRadio}</label>
        <input type='radio' name={groupRadio}/>
    </div>
  )
}

export default RadioForm