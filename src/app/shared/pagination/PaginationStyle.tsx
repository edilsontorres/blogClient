import styled from "styled-components";

export const paginationContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
    button {
        padding: 8px 12px;
        border: 1px solid #808080;
        background: white;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.3s;
        font-family: 'Lato', serif;
    }
    button:hover {
        background: #FDF1CD;
        color: #000000;
    }
    button.active {
        background: #FDF1CD;
        color: #000000;
        font-weight: bold;
    }
    button:disabled {
        background: #ddd;
        cursor: not-allowed;
    }

`;