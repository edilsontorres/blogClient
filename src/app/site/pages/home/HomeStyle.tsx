import styled from "styled-components";


export const LastsPost = styled.div`
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    padding: 5px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: 'Playfair Display', serif;
    }

`;


export const SectionPostGrid = styled.div`
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 45px;
    margin-top: 20px;
    min-height: calc(100vh - 50px); /* Leva em consideração a altura do cabeçalho e do rodapé */
    padding-bottom: 40px; /* Leva em consideração a altura do rodapé */
    overflow: auto; /* Permite a rolagem do conteúdo caso exceda o tamanho da tela */
    margin-top: 50px;

`;

export const PostGridItemArea = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 600px;

`;

export const PostTitleItem = styled.div`
    a{
        text-decoration: none;
        color: #2C3333;
    }
    a:hover{
        color: black;
    }
    h2{
        font-family: 'Playfair Display', serif;
        font-weight: 600;
    }
    h2:hover{
        text-decoration: underline;
    }
    text-align: left;
    
    cursor: pointer;
`;

export const ThumbHome = styled.div`
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

`;