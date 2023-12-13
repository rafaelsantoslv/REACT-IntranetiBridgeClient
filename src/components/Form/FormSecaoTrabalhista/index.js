import React from 'react'
import style from '../FormDadosPessoais/style.css'
import InputForm from '../InputForm'

function FormSecaoTrabalhista() {
  return (
    <div className='box-group'>
    <div class="sub-title">
        <h3>Seção Trabalhista</h3>
    </div>
    <div className='input-group'>
        
        <InputForm placeholder={'Digite a Carteira de Trabalho'} textLabel={'Carteira de Trabalho'}/>
        <InputForm placeholder={'Digite a Série'} textLabel={'Série'}/>
        <InputForm placeholder={'Digite o PIS'} textLabel={'PIS'}/>
        <InputForm placeholder={'Digite a Data de Cadastro CTPS'} textLabel={'Data de Cadastro CTPS'}/>
        
        
        
    </div>
</div>
  )
}

export default FormSecaoTrabalhista;