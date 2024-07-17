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

export const PostsSectionContainer =  styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0 0;
`;

export const PostSectionContainerArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    
`;

export const PostsSectionItem = styled.div`
    background-color: beige;
    width: 500px;
    height: auto;
`;

export const PostItem = styled.div`
    img{
        width: 100%;
        height: auto;
    }
`;