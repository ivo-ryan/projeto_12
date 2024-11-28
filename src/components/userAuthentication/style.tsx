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
        width: 94%;
        color: #fff;
        font-size: 2rem;
        text-align: center;
    }
    
    input,p{
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

export const ButtonContainer = styled.div`
    border-radius: .5rem;
    width: 60%;
    a{

    button{ 
        cursor: pointer;
        border-radius: .5rem;
        background-color: #28a745;
        width: 100%;
        border: none;
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
        }}
`;

export const IsAutenticated = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   

    p{
        text-align: left;
        font-size: 1.6rem;
        color:#007BFF;
        cursor: pointer;
        transition: all .5s ease;
        
        &:hover{
            color: #0056b3;
            text-decoration: underline; 
            
        }

    }
`;