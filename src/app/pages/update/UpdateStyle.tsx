import styled from "styled-components";


export const container = styled.div`
  background-color: #F9F9F9;

`;

export const containerTitleArea = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
`;

export const containerTitle = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  h2{
    font-family: 'Roboto';
    font-weight: 600;
    color: #0F1A34;
  }
`;

export const mainContainerArea = styled.div`
  width: 100%;
  background-color: #F9F9F9;
  min-height: calc(100vh - 50px);
  hr {
    width: 50%;
    color: gray;
    margin-top: 40px;
  }

`;

export const containerTextArea = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: block;
  
`;

export const titlePostContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
  h2{
    font-family: 'Roboto';
    font-weight: 400;
    color: #0F1A34;
    font-size: 20px;
  }
  input{
    width: 95%;
    height: 15px;
    padding: 20px;
    font-size: 18px;
    border: 1px solid #d3d3d3;
    outline: none;
    font-family: 'Roboto';
  }

`;

export const containerContentArea = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: block;
`;

export const contentPostContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
  h2{
    font-family: 'Roboto';
    font-weight: 400;
    color: #0F1A34;
    font-size: 20px;
  }
  input{
    width: 100%;
    border-radius: 10px;
    height: 20px;
    padding: 20px;
    font-size: 25px;
    border: 1px solid #d3d3d3;
    outline: none;
    font-family: 'Roboto';
  }
  .ck-editor__editable_inline{
    min-height: 400px;
    
  }
`

export const thumbContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  h2{
    font-family: 'Roboto';
    font-weight: 400;
    color: #0F1A34;
    font-size: 20px;
  }

`;

export const buttonArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const buttonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  margin: 0 auto;
  button {
    margin: 0 10px;
    cursor: pointer;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
  }
  .publish {
    background-color: #5886FF;
    color: #FFFFFF;
  }
  .cancel {
    background-color: #C0C0C0;
    color: #808080;
  }
`;