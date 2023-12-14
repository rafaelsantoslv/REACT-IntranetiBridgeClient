import React from 'react'
import RadioForm from '../RadioForm'
import style from './style.css'

function FormRadio() {
  return (
    <>
    <div className='radio-box'>
      <div className='gender-title'>
        <h3>Sexo</h3>
      </div>
      <div className='radio-group'>
        <RadioForm nameRadio={'Feminino'} groupRadio={'sexo'}/>
        <RadioForm nameRadio={'Masculino'} groupRadio={'sexo'}/>
        <RadioForm nameRadio={'Outro'} groupRadio={'sexo'}/>
    </div>
    </div>
    <div className='radio-box'>
      <div className='gender-title'>
        <h3>Estado Civil</h3>
      </div>
      <div className='radio-group'>
        <RadioForm nameRadio={'Solteiro'} groupRadio={'estado-civil'}/>
        <RadioForm nameRadio={'Casado'} groupRadio={'estado-civil'}/>
        <RadioForm nameRadio={'Viúvo'} groupRadio={'estado-civil'}/>
    </div>
    </div>
    <div className='radio-box'>
      <div className='gender-title'>
        <h3>Possui Deficência</h3>
      </div>
      <div className='radio-group'>
        <RadioForm nameRadio={'Sim'} groupRadio={'deficiencia'}/>
        <RadioForm nameRadio={'Não'} groupRadio={'deficiencia'}/>

    </div>
    </div>
    </>
    
  )
}

export default FormRadio;