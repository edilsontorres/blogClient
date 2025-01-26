import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  hr{
    width: 50%;
    margin-bottom: 20px;
    border: 1px solid #C0C0C0;
  }

`;
// export const TitleContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  h1{
    color: black;
    font-family: Roboto;
  }
 
`;

export const divImage = styled.div`
  display: flex;
  width: 50%;
    img{
        width: 100%;
        height: 600px;
    }

`;

export const BodyContent = styled.div`
  display: flex;
  width: 50%;
  margin-top: 10px;
  font-family: Roboto;

`;

export const AuthorContainer = styled.div`
  display: flex;
  width: 50%;
  margin-top: 10px;
  align-items: center;
  p{
    margin-left: 10px;
    color: #808080;
  }
`;

export const AuthorContent = styled.div`
  display: flex;
  h4{
    color: #4F4F4F;
    font-family: Roboto;
  }

`;