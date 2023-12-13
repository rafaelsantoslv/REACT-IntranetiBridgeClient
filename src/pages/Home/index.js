import React from 'react'
import ButtonHome from '../../components/Home/HomeButton'
import Nav from '../../components/Nav'
import style from './styles.css'

const Home = () => {
  return (
    <div className='Home'>
        {/* <Nav /> */}
        <div className='container'>
            <ButtonHome iconClass={'bi bi-person-add'} textButton={'Cadastrar Funcionário'} />
            <ButtonHome iconClass={'bi bi-building-add'} textButton={'Cadastrar Empresa'}/>
            <ButtonHome iconClass={'bi bi-building-fill'} textButton={'Gerenciar Empresa'}/>
            <ButtonHome iconClass={'bi bi-gear'} textButton={'Gerenciar Configurações'}/>
            <ButtonHome iconClass={'bi bi-gear'} textButton={'Gerenciar Configurações'}/>
            <ButtonHome iconClass={'bi bi-gear'} textButton={'Gerenciar Configurações'}/>
            <ButtonHome iconClass={'bi bi-gear'} textButton={'Gerenciar Configurações'}/>
            <ButtonHome iconClass={'bi bi-gear'} textButton={'Gerenciar Configurações'}/>
            <ButtonHome iconClass={'bi bi-gear'} textButton={'Gerenciar Configurações'}/>
            <ButtonHome iconClass={'bi bi-gear'} textButton={'Gerenciar Configurações'}/>
        </div>
    </div>
  )
}

export default Home