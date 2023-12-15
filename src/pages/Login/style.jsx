import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const ContainerLogin = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: radial-gradient(circle, #a4fb2b, #2c2c2c);
`;

export const Panel = styled.div`
  width: 960px;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 177px 130px 33px 95px;
  border-radius: 10px;
`;

export const Logo = styled.div`
  width: 316px;
  background-position: center center;
`;

export const LogoImage = styled.img`
  max-width: 100%;
`;

export const Inputs = styled.div`
  width: 290px;
`;

export const Span = styled.span`
  font-family: Poppins;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
  padding-bottom: 54px;
`;

export const Input = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  font-size: 15px;
  line-height: 10;
  color: #666666;
  display: block;
  width: 100%;
  background-color: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
  outline: none;
  border: none;
`;



export const SpanField = styled.span `
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  padding-bottom: 1px ;
  pointer-events: none;
  color: #666666;
  bottom: 0;
  left: 0;
`

export const SpanShadow = styled.span `
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(87,184,70, 0.8);
`

export const ButtonPanel = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #76aa2d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  transition: all 0.4s;
  cursor: pointer;
  transition: all 0.4s;
  outline: none;
  border: none;
`;

export const TextPanel = styled.div`
  padding-top: 12px;
  /* padding-left: ; */
  text-align: center;
  /* padding: 3px */
`;

export const TextSpan = styled.span`
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #999999;
`;

export const TextLink = styled.a`
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
  padding: 2px;
`;

export const RhPanel = styled.div`
  padding-top: 136px;
  text-align: center;
  /* padding: 3px; */
`;

export const RhLink = styled.a`
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
  user-select: none;
`;