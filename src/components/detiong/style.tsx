
import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100%;
    height: 35rem;
    display: flex;
    background-color: #3F3D3C ;
    color: #fff;
    justify-content: center;
    align-items: start;
    box-shadow: 0 0.5rem 1.5rem black;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        height: 25rem;
    }
`;

export const Container = styled.div`
    position: relative ;
    width: 60%;
    height: 100%;
    transition: all .5s ease;

    @media (max-width: 1440px) {
        width: 80%;
    }

`;

export const ContainerImg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    img{
        width: 100%;
        height: 100%;
        filter: grayscale(20%);
    }
`;

export const Overlay = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient( to left , transparent , #111 ) ;
`;

export const MovieInfo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 5;
    height: 35rem;
    padding-left: 3rem;
    width: 50%;
    

    h2{
        font-size: 4rem;
        letter-spacing: 1rem;
    }

    button{
        width: 13rem;
        height: 4rem;
        background-color: #d00916;
        border: none;
        font-weight: 400;
        border-radius: 3rem;
        font-size: 3rem;
        letter-spacing: .3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .3rem;
        transition: all .4s ease-in;
        cursor: pointer;
        color: #fff;

        &:hover{
            background-color: #F40612;
        }

        svg{
            font-size: 2rem;
        }
    }

    @media (max-width: 768px) {
        max-height: 30rem;
        width: 70%;
        justify-content: flex-start;
        gap: 2rem;

        h2{
            font-size: 2rem;
            padding-top: 2rem;
        }

        p{
            line-height: 2.4rem;
        }

        button{
            width: 10rem;
            font-size: 1.8rem;
            height: 3rem;

            svg{
                font-size: 1.5rem;
            }
        }
    }
`;

export const ContainerIndex = styled.div`
        display: flex;
        flex-direction: row;
        position: absolute;
        z-index: 4;
        bottom: 2rem;
        left: 50%;
        right: -50%;
        width: 100%;
        gap: 2rem;
        span{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color:#B3B3B3 ;
        }
`;