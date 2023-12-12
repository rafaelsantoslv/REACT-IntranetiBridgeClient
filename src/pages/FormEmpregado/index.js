import React from 'react'
import InputForm from '../../components/Form/InputForm'

function FormEmpregado() {
  return (
    <div>
        <div className='container'>
            <div className='form' >
                <div className='title'>
                    <h1>Cadastro de Funcionário</h1>
                </div>
                <div className='box-group'>
                    <div className='sub-title'>
                        <h3>Dados Pessoais</h3>
                    </div>
                    <div className='input-group'>
                        <InputForm placeholderInput={"digite o primeiro nome"} textInput={"Primeiro nome"} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEmpregado;