import React from 'react'
import style from '../FormDadosPessoais/style.css'
import InputForm from '../InputForm'

function FormEndereco() {
  return (
    <div className='box-group'>
    <div class="sub-title">
        <h3>Endereço</h3>
    </div>
    <div className='input-group'>
        
        <InputForm placeholder={'Digite a Rua'} textLabel={'Rua'}/>
        <InputForm placeholder={'Digite o Número'} textLabel={'Número'}/>
        <InputForm placeholder={'Digite o Complemento'} textLabel={'Complemento'}/>
        <InputForm placeholder={'Digite o Bairro'} textLabel={'Bairro'}/>
        <InputForm placeholder={'Digite o Municipio'} textLabel={'Municipio'}/>
        <InputForm placeholder={'Digite o CEP'} textLabel={'CEP'}/>
        <InputForm placeholder={'Digite o Estado'} textLabel={'Estado'}/>
        
        
    </div>
</div>
  )
}

export default FormEndereco;