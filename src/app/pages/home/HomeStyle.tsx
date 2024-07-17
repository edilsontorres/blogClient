import styled from "styled-components";

export const HeadContainer = styled.div`
    display: flex;
    flex: 1;
    background-color: #000000;
    margin-bottom: 20px;
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
