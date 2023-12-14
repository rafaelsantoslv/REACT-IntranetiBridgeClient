import React from 'react'
import FormDadosPessoais from '../../components/Form/FormDadosPessoais';
import FormEndereco from '../../components/Form/FormEndereco';
import FormDocumentos from '../../components/Form/FormDocumentos'
import FormComplemento from '../../components/Form/FormComplemento';
import style from './styles.css'
import FormSecaoTrabalhista from '../../components/Form/FormSecaoTrabalhista';
import FormEmpresa from '../../components/Form/FormEmpresa';
import FormRadio from '../../components/Form/FormRadio';
function FormEmpregado() {
  return (
    <div className='FormEmpregado'>
        <div className='container'>
          <div className='form'>
          <div className='title'>
              <h1>
                Cadastro de Funcionário
              </h1>
          </div>
          <FormDadosPessoais />
          <FormEndereco/>          
          <FormDocumentos/>     
          <FormComplemento/>   
          <FormSecaoTrabalhista/>  
          <FormEmpresa/>
          <FormRadio/>
          
          </div>
        </div>
      </div>
  )
}

export default FormEmpregado;