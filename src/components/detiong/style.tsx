
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
    overflow-y: hidden;

    h2,button{
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

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

    @media (max-width: 500px) {
        width: 95%;
    }

`;

export const ContainerImg = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: hidden;

    img{
        display: none;
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
    left: 3rem;
    width: 50%;
    top: 3rem;
    

    h2{
        font-size: 4rem;
        letter-spacing: 1rem;
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
    }

    @media (max-width: 500px) {
        top: 1rem;

        h2{
            letter-spacing: .5rem;
        }
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 3rem;
    z-index: 2;
    width: 13rem;
    height: 3rem;

    button {
        width: 100%;
        padding: .5rem 2rem;
        background-color: #d00916; 
        border: none;
        font-weight: 500; 
        border-radius: 1.5rem; 
        font-size: 2.5rem; 
        letter-spacing: 0.2rem; 
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem; 
        transition: all 0.3s ease-in-out; 
        cursor: pointer;
        color: #fff;
       
        
        &:focus {
            outline: none; 
            box-shadow: 0 0 0.5rem #ff6a73;
        }

      
        &:hover {
            background-color: #f1323f; 
            transform: scale(1.05); 
            box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.3); 
        }

       
        &:active {
            transform: scale(0.97); 
            background-color: #b00710; 
        }

        
        svg {
            font-size: 2.2rem; 
            transition: transform 0.3s ease-in-out;
        }

    }

    @media (max-width: 768px) {
       button{
            width: 10rem;
            font-size: 1.8rem;

            svg{
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 500px) {
        bottom: 3rem;
    }
`;

export const ContainerIndex = styled.div`
        display: flex;
        flex-direction: row;
        position: absolute;
        z-index: 4;
        bottom: 2rem;
        left: 35%;
        gap: 2rem;
        span{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color:#B3B3B3 ;
        }

        @media (max-width: 500px) {
            width: 70%;
            gap: 1rem;
            bottom: 1rem;
            left: 20%;
        }
`;