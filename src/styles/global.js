import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
const GlobalStyle = createGlobalStyle`
    @charset "UTF-8";
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap');

    :root {
        --cor-fundo-header-footer: #2d2d2d;
      }

    *{
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        overflow-y: hidden;
    }

    body {
        background: center / cover no-repeat #353535;
    }

    a {
        text-decoration: none;
        color: white;
      }
`

export default GlobalStyle