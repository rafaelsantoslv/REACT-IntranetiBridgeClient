import styled from "styled-components";


const StyledHomeMain = styled.main `
    .hero {
        height: calc(100vh - 80px);
        background: center / cover no-repeat #353535;
        overflow-y: scroll;
    }
    .container{
        background-color: transparent;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: auto;
        width: 85%;
        margin-top: 100px;
        margin-bottom: 100px;
    }
`


export default StyledHomeMain;