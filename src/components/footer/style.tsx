import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;
    background-color: #121212; 
    height: 10rem;
    width: 100%;
    position: relative;

    @media (max-width: 500px) {
        gap: 1rem;
        justify-content: center;
    }

`;

export const Container = styled.div`
    color: #B3B3B3; 
    padding: 2rem; 
    text-align: center; 
    font-size: 1.4rem;

    a,p{
        letter-spacing: .2rem;
    }
    
    a{
        display: inline-block;
        color: #E50914;
        margin: 0 1rem;
        padding-top: 1rem;
    }

    @media (max-width: 500px) {
        font-size: 1rem;
        padding: 0 1rem 0 0;
        text-align: left;
        width: 60%;
    }
    
`;

export const Contact = styled.div`
    display: flex;
    gap: 2rem;

    svg{
        font-size: 2.8rem;
    }

    @media (max-width: 500px) {
        gap: 1rem;

        svg{
            font-size: 2rem;
        }
    }
`;

export const WhatsContainer = styled.div`

    a > svg{
            color: #25D366;
            transition: all .5s ease;

            &:hover{
                filter: drop-shadow(0 0 .5rem #25D366);
                transform: scale(1.1);
            }
        }
`;

export const TelegContainer = styled.div`
    a > svg{
            color: #0088cc;
            background-color: #fff;
            border-radius: 50%;
            transition: all .5s ease;

            &:hover{
                filter: drop-shadow(0 0 .5rem #0088cc);
                transform: scale(1.1);
            }
        }
`;

export const LinkedContainer = styled.div`
    a > svg {
            background-color: #fff;
            border-radius: .3rem;
            color: #0077b5;
            transition: all .5s ease;

            &:hover{
                filter: drop-shadow(0 0 .5rem #0077b5);
                transform: scale(1.1);
            }
        }
`;