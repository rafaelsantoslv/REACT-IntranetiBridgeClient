import React from 'react'
import style from '../FormDadosPessoais/style.css'
import InputForm from '../InputForm'

function FormEmpresa() {
  return (
    <div className='box-group'>
    <div class="sub-title">
        <h3>Empresa</h3>
    </div>
    <div className='input-group'>
        
        <InputForm placeholder={'Digite a Função'} textLabel={'Função'}/>
        <InputForm placeholder={'Digite a Carga Horária'} textLabel={'Carga Horária'}/>
        <InputForm placeholder={'Digite a Data de Admissão'} textLabel={'Data de Admissão'}/>
        <InputForm placeholder={'Digite a Data de Cadastro CTPS'} textLabel={'Data de Cadastro CTPS'}/>
        <InputForm placeholder={'Digite o Salário'} textLabel={'Salário'}/>
        
        
        
    </div>
</div>
  )
}

export default FormEmpresa;