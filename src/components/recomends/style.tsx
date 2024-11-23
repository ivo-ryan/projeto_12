import styled from "styled-components";


export const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: #3F3D3C;
    padding: 3rem 2rem ;
    color: #fff;

    h2{
        font-size: 2rem;
        letter-spacing: .4rem;
    }
`;

export const ContainerCards = styled.div`
    display: flex;
    width: 90%;
    height: 35rem;
    align-items: center;
    justify-content:center;
    gap: 2rem;

    overflow-x: auto; /* Habilita scroll horizontal */
    white-space: nowrap; /* Mantém os itens em uma única linha */
    
    /* Remove barra de rolagem (opcional) */
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #888 #f1f1f1; /* Firefox */

    &::-webkit-scrollbar {
        height: 8px; /* Altura da barra de rolagem no Chrome, Edge e Safari */
    }

    &::-webkit-scrollbar-thumb {
        background: #888; /* Cor da barra */
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; /* Cor ao passar o mouse */
    }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor do fundo */
  }

  a{
    width: 25rem;
    max-height: 25rem;
  }
`;

export const Card = styled.div`
    width: 100%;
    border-radius: 1rem;
    position: relative;
    cursor: pointer;
    box-shadow: .2rem .6rem 1rem #111;
    `;

export const ImageContainer = styled.div`
    border-radius: 1rem;
    display: flex;
    align-items: end;
    justify-content: center;
    
    img{
        border-radius: 1rem;
        width: 100%;
        height: 30rem;
        filter: grayscale(70%);
        transition: all .5s ease;

        &:hover{
            filter: grayscale(0%);
        }
    }

    &:hover{
        &:hover{
            img{filter: grayscale(0);}
        }
        div{
            opacity: 1;
        }
    }
`;


export const PlayContainer = styled.div`
        position: absolute;
        display: flex;
        align-items: center;
        background-color: #d00916;
        color: #fff;
        padding: 1.5rem;
        font-size: 2.5rem;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all .5s ease-in;
        
`;

export const Ponts = styled.div`
    position: absolute;
    background-color: #FE688B;
    color: #fff;
    top: -1rem;
    right: 0;
    font-size: 2rem;
    padding: .5rem ;
    border-radius: 50%;
    box-shadow: 0 .5rem 1rem #000;
    z-index: 10;
`;