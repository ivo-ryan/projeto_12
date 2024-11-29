import styled, { css } from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: url('https://wallpapercave.com/wp/wp4951502.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
`;


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent; 
    backdrop-filter: blur(1rem);
    background-color: rgba(255, 255, 255, 0.1);
    gap: 1rem;
    padding: 2rem 0;
    width: 40%;
    border-radius: 1rem;
    border: .1rem solid #333;
    
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
            color: #0056b3; /* Azul mais escuro para indicar hover */
            text-decoration: underline; /* Opcional: Adiciona sublinhado no hover */
            
        }

    }
`;

export const Input = styled.input<{erro: boolean}>`
        outline: none;
        border: 1px solid green;
        border-radius: .5rem;
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
    
        &::placeholder{
            color: #fff;
        }

        &:focus{
            outline: 1px solid aquamarine;
            ${({erro}) => erro && css`outline: none;`}
        }

    ${({erro}) => erro && css`border-color: red;`}

`;


export const HelperText = styled.p`
        color: red;
        font-size: 14px;
`;
