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
    width: 30%;
    border-radius: 1rem;
    border: .1rem solid #333;

   
    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: .5rem;
        width: 100%;
        padding: 0 10%;
        text-align: left;
        background: transparent; 
    }
    
    h2{
        padding: 0 10%;
        color: #fff;
        font-size: 2rem;
        text-align: left;
    }
    
    input,button{
        width: 100%;
    }

    @media (max-width: 1100px) {
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 60%;
    }

    @media (max-width: 500px) {
        width: 90%;
    }

    
    `;

export const ErroMessage = styled.p`
    text-align: left;
    width: 100%;
    color: red;
    font-size: 1.4rem;
    padding-bottom: 1rem;
`;

export const Button = styled.button`
    border: none;
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
        width: 48%;
        text-align: left;
        font-size: 1.6rem;
        color:#007BFF;
        cursor: pointer;
        transition: all .5s ease;
        
        &:hover{
            color: #0056b3;
            text-decoration: underline;
            
        }

        @media (max-width: 500px) {
            width: 50%;
        }
        @media (max-width: 380px) {
            width: 65%;
        }

    }
`;

export const Input = styled.input<{erro: boolean}>`
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

    ${({erro}) => erro && css`border-color: red;`}

`;
