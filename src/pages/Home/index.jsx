import React from 'react';
import {
  MainHome,
  ContainerHome
} from './styles';
import ButtonHome from './HomeButton';
import Nav from '../../components/Nav';


const Home = () => {
  return (
    <>
    <MainHome>
        <Nav />
          <ContainerHome>
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
          </ContainerHome>
    </MainHome>
    </>
  )
}

export default Home