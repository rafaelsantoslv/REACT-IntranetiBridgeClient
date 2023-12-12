const { default: styled } = require("styled-components");

const StyledNav = styled.div`
  header {
    background-color: var(--cor-fundo-header-footer);
    padding-inline: 30px;
    
  }

  .nav {
    max-width: 100%;
    height: 80px;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    /* Adicione estilos para a imagem do logo aqui, se necessário */
  }

  .nav-list {
    display: flex;
    list-style: none;
  }

  .nav-list a {
    font-size: 18px;
    padding-block: 15px;
    text-decoration: none;
    color: white;
  }
`;

export default StyledNav;