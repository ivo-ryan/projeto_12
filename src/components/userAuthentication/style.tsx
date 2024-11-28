import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;

      form{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: .5rem;
        width: 100%;
        text-align: left;
        background: transparent; 
    }
    
    h2{
        width: 65%;
        color: #fff;
        font-size: 2rem;
        text-align: center;
    }
    
    input,button,p{
        width:60%; 
        padding:1rem;
    }
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-radius: .5rem;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    
    &::placeholder{
        color: #fff;
    }

`;

export const ErroMessage = styled.p`
    text-align: left;
    color: red;
    font-size: 1.4rem;
`;

export const Button = styled.button`
    border: none;
    border-radius: .5rem;
    background-color: #28a745;
    cursor: pointer;
    color: #fff;

    &:hover {
        background-color: #218838;
        transform: scale(1.05); 
    }

    &:active {
        background-color: #1e7e34; 
        transform: scale(1);
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed; 
    }
`;