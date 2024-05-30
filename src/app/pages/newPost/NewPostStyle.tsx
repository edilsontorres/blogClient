import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DCDCDC;
    height:100vh;

`;

export const FormContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding-left: 8px;
  h1{
    color: #000000;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

`;

export const CkeditorContainer = styled.div`
  display: flex;
  height: auto;

`;

export const InputModelContainer = styled.div`
  display: flex;
  padding: 2px;
`;

export const InputModel = styled.input`
  border-radius: 3px;
  width: 100%;
  height: 25px;
  padding: 8px 10px;
  border: none;
  outline: none;
  font-size: 15px;
  &::placeholder{
    font-style: italic;
  }
`;

export const BotaoContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-bottom: 20px;

`;

export const Botao = styled.input`
  border-radius: 50px;
  color: #FFFFFF;
  padding: 5px 15px 5px 15px;
  font-size: 12px;
  font-weight: 600;
  background-color: #000000;
  cursor: pointer;
  border: none;

`;

