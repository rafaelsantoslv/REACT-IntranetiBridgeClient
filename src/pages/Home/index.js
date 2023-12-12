import React from 'react'
import ButtonHome from '../../components/Home/HomeButton'
import Nav from '../../components/Nav'
import StyledHomeMain from './styles'

const Home = () => {
  return (
    <div>
        <Nav />
        <StyledHomeMain>
        <main className='hero'>
          <div className='container'>
            
            <ButtonHome iconClass={'bi bi-person-add'} textButton={'Cadastrar Funcionário'} />
            <ButtonHome iconClass={'bi bi-building-add'} textButton={'Cadastrar Empresa'}/>
            <ButtonHome iconClass={'bi bi-building-fill'} textButton={'Gerenciar Empresa'}/>
            <ButtonHome iconClass={'bi bi-gear'} textButton={'Gerenciar Configurações'}/>
          </div>
        </main>
        </StyledHomeMain>
    </div>
  )
}

export default Home