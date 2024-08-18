import styled from "styled-components";

export const dashboardHeader = styled.div`
    display: flex;
    height: 50px;
    background-color: #FFFFFF;
    padding: 5px;
    justify-content: right;
    align-items: center;
    margin-bottom: 10px;
`;

export const nameArea = styled.div`
    display: block;
    color: #302D43;
    text-align: start;
    font-family: 'Roboto';
    margin-right: 15px;
`;

export const photoArea = styled.div`
    display: flex;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        border-radius:50px;
    }

`;

export const dashboardContainerTitleArea = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    //margin-bottom: 20px;
    background-color: #F9F9F9;

`;

export const dashboardContainerTitle = styled.div`
    min-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        color: #0F1A34;
        font-family: 'Roboto';
        font-weight: 600;
        
    }
`;

export const actionNewPost = styled.div`
    display: flex;
    width: 150px;
    height: 35px;
    border-radius: 40px;
    background-color: #28A745;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px 8px;
    color: #FFFFFF;
    p{
        font-family: 'Roboto';
        font-weight: 600;
        margin-left: 8px;
        font-size: 15px;
    }
    svg{
        font-size: 25px;
    }
`;
export const mainDashboard = styled.main`
    background-color: #F9F9F9;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const dashboardContainer = styled.div`
    min-height: 100vh;
    padding-bottom: 30px;
    margin: 0 auto;
    padding: 20px;
    min-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;
export const postContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #d3d3d3;
`;
export const thumbPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100%;
    img{
        width: 200px;
        height: 200px;
    }
`;
export const tilePost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
    width: 100%;
    height: 210px;
    text-align: justify;
    font-family: 'Roboto';
`;
export const pArea = styled.div`
    display: flex;
    margin-top: 5%;
    width: 80%;
    justify-content: space-between;
    font-weight: 600;
    color: #302D43;
`;

export const pAuthor = styled.div`
    text-align: justify;
`;
export const pData = styled.div`
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }

`;
export const actionPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const svgArea = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
    svg{
        width: 20px;
        height: 20px;
        color: #302D43;
    }
`;