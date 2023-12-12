const { default: styled } = require("styled-components");

const StyledButton = styled.div`
  button {
    background-color: #353535;
    width: 440px;
    height: 280px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 1px solid transparent;
    font-weight: 600;
    font-size: 1.1em;
    margin: 10px;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #5f5f5f;
    transition: 0.5s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }


`;

export default StyledButton;