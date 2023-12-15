import React from 'react';
import {
  ContainerLogin,
  Panel,
  Logo,
  LogoImage,
  Inputs,
  Span,
  Input,
  InputField,
  ButtonPanel,
  Button,
  TextPanel,
  TextSpan,
  TextLink,
  RhPanel,
  RhLink,
  SpanField,
  SpanShadow
} from './style'; // Replace with the actual file path

import logo from '../../assets/LogoIbridge2.png';

function Login() {
  return (
    <ContainerLogin>
      <Panel>
        <Logo>
          <a href="">
            <LogoImage src={logo} alt='Logo iBridge' />
          </a>
        </Logo>
        <Inputs>
          <Span>Área de Login</Span>
          <Input>
            <InputField className="input-panel" type="text" placeholder="Login" />
            <SpanField>
            <i className="bi bi-envelope" />
            </SpanField>
          </Input>
          <Input>
            <InputField className="input-panel" type="password" placeholder="Senha" />
            <SpanShadow/>
            <SpanField>
            <i className="bi bi-lock-fill" />
            </SpanField>
          </Input>
          <ButtonPanel>
            <Button className="button-form">Entrar</Button>
          </ButtonPanel>
          <TextPanel>
            <TextSpan>Esqueci</TextSpan>
            <TextLink href="">Login/Senha</TextLink>
          </TextPanel>
          <RhPanel>
            <RhLink>
              Para criar uma conta solicite ao RH

            </RhLink>
          </RhPanel>
        </Inputs>
      </Panel>
    </ContainerLogin>
  );
}

export default Login;
