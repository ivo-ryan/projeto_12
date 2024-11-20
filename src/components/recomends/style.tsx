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
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
`;

export const Card = styled.div`
    max-width: 25rem;
    max-height: 35rem;
    border-radius: 1rem;
    position: relative;
    cursor: pointer;
    box-shadow: .2rem .6rem 1rem #111;
    `;

export const ImageContainer = styled.div`
    border-radius: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img{
        border-radius: 1rem;
        width: 100%;
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

export const InfoCard = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    
    svg{
        font-size: 3rem;
        color: orange;
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
`;