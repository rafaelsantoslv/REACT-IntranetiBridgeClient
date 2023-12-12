import React from 'react'
// import styledInputForm from './styles'

function InputForm({textInput, placeholderInput}) {
  return (
    <styledInputForm>
    <div className='input-box'>
        <label for="firstname">{textInput}</label>
        <input class="textbar" type="text" name="firstname" id="firstname" placeholder={placeholderInput} ></input>
    </div>
    </styledInputForm>
  )
}

export default InputForm