import styled from "styled-components";

export const dashboardHeader = styled.div`
    display: flex;
    flex: 1;
    background-color: #000000;
    padding: 5px;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 10px;
    h2{
        font-family: 'Roboto';
    }
`;

export const dashboardContainer = styled.div`
    min-height: 100vh; /* Leva em consideração a altura do cabeçalho e do rodapé */
    padding-bottom: 30px; /* Leva em consideração a altura do rodapé */
    margin: 0 auto;
    max-width: 1200px;
    display: block;
    table {
        margin-top: 30px;
        width: 100%;
        text-align: center;
        font-size: 20px;
    }
    thead{
        font-family: 'Roboto';
    }

`;