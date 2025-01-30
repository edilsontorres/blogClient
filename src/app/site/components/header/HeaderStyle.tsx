import styled from "styled-components";

export const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FDF1CD;
    justify-content: center;
    align-items: center;
`;

export const HeadContainerArea = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 63%;
    h4{
        color: black;
        font-family: 'Lato', serif;
        font-weight: 300;
        cursor: pointer;
    }
    h4:hover{
        text-decoration: underline;
    }
    
`;

export const HeadContainerContact = styled.div`
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    padding: 5px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
`;

export const HeadAreaLogo = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    h1{
        font-family: 'Playfair Display', serif;
        font-size: 35px;
        cursor: pointer;
    }
    h1:hover{
        text-decoration: underline;
    }

`;

export const HeadAreaContact = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    h1{
        font-family: 'Playfair Display', serif;
        font-size: 35px;
        cursor: pointer;
    }
    h1:hover{
        text-decoration: underline;
    }

`;

export const HeadContainerIcons = styled.div`
    margin-right: 20px;
    svg{
        color: #000000;
        cursor: pointer;
        font-size: 1.2em;
    }
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px dashed;
  width: 62%;
  border-radius: 10px;
`;