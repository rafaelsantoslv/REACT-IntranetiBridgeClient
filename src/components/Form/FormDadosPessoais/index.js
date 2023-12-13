import React from 'react'
import InputForm from '../InputForm'
import style from './style.css'
function FormDadosPessoais() {
  return (
    
    <div className='box-group'>
        <div class="sub-title">
            <h3>Dados Pessoais</h3>
        </div>
        <div className='input-group'>
            <InputForm placeholder={'Digite o primeiro nome'} textLabel={'Primeiro Nome'}/>
            <InputForm placeholder={'Digite o sobrenome'} textLabel={'Sobrenome'}/>
            <InputForm placeholder={'Digite a data de nascimento'} textLabel={'Data Nascimento'}/>
            <InputForm placeholder={'Digite a Nacionalidade'} textLabel={'Nacionalidade'}/>
            <InputForm placeholder={'Digite a Escolaridade'} textLabel={'Escolaridade'}/>
            <InputForm placeholder={'Digite o Local de Nascimento'} textLabel={'Local de Nascimento'}/>
            <InputForm placeholder={'Digite o Estado de Nascimento'} textLabel={'Estado de Nascimento'}/>
            <InputForm placeholder={'Digite o Número Celular'} textLabel={'Número Celular'}/>
            <InputForm placeholder={'Digite o Email'} textLabel={'Email'}/>
            
        </div>
    </div>
  )
}

export default FormDadosPessoais