import styled from 'styled-components';

export const ContainerMovies = styled.div`
    padding-bottom: 2rem;
    background-image: url('https://wallpapercave.com/wp/wp4951502.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    color: #fff;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    @media (max-width: 500px) {
        background-image: url('https://wallpapercave.com/wp/wp3534343.jpg') ;
    }
`;


export const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: 40rem;

    h2{
        text-align: left;
        padding: 3rem;
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: .4rem;
        width: 100%;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`;


export const Card = styled.div`
    width: 25rem;
    height: 35rem;
    position: relative;
    cursor: pointer;
    box-shadow: 0 .4rem 1rem #222;
    border-radius: 1rem;

    @media (max-width: 1200px) {
        width: 20rem;
        height: 25rem;
    }

    @media (max-width: 500px) {
        width: 18rem;
        height: 20rem;
    }

    @media (max-width: 375px) {
        width: 12rem;
        height: 17rem;
    }
    `;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    
    img{
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        filter: grayscale(70%);
        transition: all .5s ease;

        
    }

    &:hover{
        &:hover{
            img{
                filter: grayscale(0);
            }
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
        justify-content: center;
        background-color: #d00916;
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
    top: -1rem;
    right: 0;
    font-size: 2rem;
    padding: .5rem ;
    border-radius: 50%;
    box-shadow: 0 .5rem 1rem #000;
`;