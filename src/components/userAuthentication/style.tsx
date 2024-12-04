import styled, { css } from "styled-components";

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
        width: 100%;
        color: #fff;
        font-size: 2rem;
        text-align: left;
    }
    
    input{
        width: 100%; 
    }

    @media (max-width: 500px) {
        h2{
            font-size: 1.8rem;
        }
    }
    @media (max-width: 350px) {
        h2{
            font-size: 1.5rem;
        }
    }

`;

export const Input = styled.input<({erro:boolean})>`
    outline: none;
    border: 1px solid #6A0DAD;
    border-radius: .5rem;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    transition: all .5s ease;
    padding: 1rem;
    
    &::placeholder{
        color: #fff;
    }

    &:focus{
        outline: 1px solid #8c75a6;
        ${({erro}) => erro && css`outline: none;`}
    }

    ${({erro}) => erro && css`border: 1px solid red;`}
`;

export const ErroMessage = styled.p`
    text-align: left;
    width: 100%;
    padding-bottom: 1rem;
    color: red;
    font-size: 1.4rem;
`;

export const Button= styled.button`
    border: none;
    outline: none;
    border-radius: .5rem;
    background-color: #28a745;
    cursor: pointer;
    color: #fff;
    padding: 1rem 0;
    transition: all .5s ease;

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

export const IsAutenticated = styled.div`
    padding: 0 10%;

    p{  
        width: 55%;
        text-align: left;
        font-size: 1.6rem;
        color:#007BFF;
        cursor: pointer;
        transition: all .5s ease;
        
        &:hover{
            color: #0056b3;
            text-decoration: underline; 
            
        }

        @media (max-width: 380px) {
            width: 65%;
        }

        @media (max-width: 350px) {
            width: 75%;
        }

    }
`;