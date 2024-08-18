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

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #DCDCDC;
//   height:100vh;

// `;

// export const FormContainer = styled.div`
//   display: block;
//   align-items: center;
//   justify-content: center;
// `;

// export const TitleContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// export const TitleArea = styled.div`
//   display: flex;
//   align-items: center;
//   width: 50%;
//   padding-left: 8px;
//   h1{
//     color: #000000;
//     font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
//   }

// `;

// export const CkeditorContainer = styled.div`
//   display: flex;
//   margin-bottom: 10px;


// `;

// export const InputModelContainer = styled.div`
//   display: flex;
//   padding: 2px;
//   margin-bottom: 10px;
// `;

// export const InputModel = styled.input`
//   border-radius: 3px;
//   width: 100%;
//   height: 25px;
//   padding: 8px 10px;
//   border: none;
//   outline: none;
//   font-size: 15px;
//   &::placeholder{
//     font-style: italic;
//   }
  
// `;


// export const BotaoContainer = styled.div`
//   display: flex;
//   justify-content: end;
//   width: 100%;
//   margin-bottom: 10px;

// `;

// export const Botao = styled.input`
//   border-radius: 50px;
//   color: #FFFFFF;
//   padding: 5px 15px 5px 15px;
//   font-size: 12px;
//   font-weight: 600;
//   background-color: #000000;
//   cursor: pointer;
//   border: none;

// `;

// export const InputFileModel = styled.div`
//   background-color: #000000;
//   color: #ffffff;
//   display: flex;
//   justify-content: center;
//   border-radius: 50px;
//   padding: 5px 15px 5px 15px;
//   font-size: 15px;
//   font-weight: 600;
//   width: 20%;
//   input{
//     display: none;
//   }
//   label{
//     cursor: pointer;
//   }
// `;

