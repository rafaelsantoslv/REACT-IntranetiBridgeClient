import React from 'react'
import style from '../FormDadosPessoais/style.css'
import InputForm from '../InputForm'

function FormDocumentos() {
  return (
    <div className='box-group'>
    <div class="sub-title">
        <h3>Documentos</h3>
    </div>
    <div className='input-group'>
        
        <InputForm placeholder={'Digite o RG'} textLabel={'RG'}/>
        <InputForm placeholder={'Digite a Data Cadastro RG'} textLabel={'Data Cadastro RG'}/>
        <InputForm placeholder={'Digite o CPF'} textLabel={'CPF'}/>
        <InputForm placeholder={'Digite o Orgão Emissor'} textLabel={'Orgão Emissor'}/>
        <InputForm placeholder={'Digite o Título Eleitoral'} textLabel={'Título Eleitoral'}/>
        <InputForm placeholder={'Digite a Zona'} textLabel={'Zona'}/>
        <InputForm placeholder={'Digite a Seção'} textLabel={'Seção'}/>
        
        
    </div>
</div>
  )
}

export default FormDocumentos