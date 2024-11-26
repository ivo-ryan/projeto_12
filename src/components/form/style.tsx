import styled from "styled-components";

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

export const ErroMessage = styled.p`
    color: red;
    font-size: 1.4rem;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: transparent; 
    backdrop-filter: blur(1rem);
    gap: 1rem;
    padding: 2rem 0;
    align-items: center;
    width: 30%;
    border-radius: 1rem;
    border: .1rem solid #333;

    h2{
        color: #fff;
        font-size: 2rem;
        text-align: left;
    }
`;

export const Input = styled.input`
    outline: none;
    width: 60%;
    padding: 1rem;
    border: none;
    border-radius: .5rem;

`;


export const Button = styled.button`
    padding: 1rem;
    width: 60%;
    border: none;
    border-radius: .5rem;
    background-color: red;
    color: #fff;
`;