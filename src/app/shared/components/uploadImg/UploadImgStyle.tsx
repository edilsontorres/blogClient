import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22%;
    height: 200px;
    border: dashed gray;
    cursor: pointer;
    &:hover {
       border-color: #C0C0C0;
    }
    &.boderActive {
        border-color: #5886FF;
    }
    p {
        font-size: 20px;
        color: gray;
        font-weight: 400;
        font-family: 'Roboto';
    }
    span {
        font-weight: bold;
    }
    label {
        cursor: pointer;
        width: 100%;
        height: 100%;
    }
    .alignItens{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 5px;
        padding-bottom: 6px;
        width: 100%;
        height: 100%;
        svg {
            width: 35px;
            height: 35px;
            color: gray;
        }
        .svgActive{
            color: #5886FF;
        }
        .dropSend{
            font-size: 20px;
            color: #5886FF;
            font-weight: 400;
            font-family: 'Roboto';
            font-weight: bold;
        }
    }
   
`;

export const thumb = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    img {
        width: 100%;
        height: 100%;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        cursor: pointer;
        position: absolute;
        //place-self: initial;
        margin-left: 9.4%;
        background-color: #F7931B;
        border: none;
        border-radius: 50px;
        svg {
            width: 15px;
            height: 15px;
            color: #0F1A34;
        }
    }


`;