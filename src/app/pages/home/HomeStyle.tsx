import styled from "styled-components";

export const HeadContainer = styled.div`
    display: flex;
    flex: 1;
    background-color: #000000;
    height: 35px;
    padding: 5px;
    justify-content: center;
`;

export const HeadContainerArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`;

export const HeadContainerIcons = styled.div`
    margin-right: 20px;
    svg{
        color: #FFFFFF;
        cursor: pointer;
        font-size: 1.2em;
    }
`;

export const HeadContarinerLogo = styled.div`
    cursor: pointer;
    h2{
        color: #FFFFFF;
    }
`;

export const SectionPostGrid = styled.div`
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 45px;
    margin-top: 20px;

`;

export const PostGridItem = styled.div`
    img{
        width: 100%;
        height: auto;
        cursor: pointer;
    }

`;

export const PostTitleItem = styled.div`
    a{
        text-decoration: none;
        color: #2C3333;
    }
    a:hover{
        color: black;
    }
    h1{
        font-family: Poppins;
        font-weight: 600;
        
    }
    text-align: left;
    margin-top: 10px;
    
    
`;