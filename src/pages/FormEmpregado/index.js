import React from 'react'
import FormDadosPessoais from '../../components/Form/FormDadosPessoais';
import FormEndereco from '../../components/Form/FormEndereco';
import FormDocumentos from '../../components/Form/FormDocumentos'
import FormComplemento from '../../components/Form/FormComplemento';
import style from './styles.css'
// import loginStyle from './';
import FormSecaoTrabalhista from '../../components/Form/FormSecaoTrabalhista';
import FormEmpresa from '../../components/Form/FormEmpresa';
import FormRadio from '../../components/Form/FormRadio';
import ButtonHome from '../../components/Home/HomeButton';

function FormEmpregado() {
  

  
  
  return (
    <loginStyle>
    <div className='FormEmpregado'>
        <div className='containerFormEmpregado'>
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
          {/* <ButtonHome iconClass={'bi bi-send'}/> */}
          <div className='buttonClass2'>
            <a className='buttonLink2' href='funcionario'>
              Enviar
            <i className='bi bi-send'></i>
            </a>
          </div>
          </div>
        </div>
      </div>
      </loginStyle>
  )
}

export default FormEmpregado;