import React from 'react'
import InputForm from '../InputForm'
import style from '../FormDadosPessoais/style.css'
function FormComplemento() {
  return (
    
    <div className='box-group'>
        <div class="sub-title">
            <h3>Complemento</h3>
        </div>
        <div className='input-group'>
            <InputForm placeholder={'Digite o Nome do Pai'} textLabel={'Nome do Pai'}/>
            <InputForm placeholder={'Digite o Nome da Mãe'} textLabel={'Nome da Mãe'}/>            
        </div>
    </div>
  )
}

export default FormComplemento