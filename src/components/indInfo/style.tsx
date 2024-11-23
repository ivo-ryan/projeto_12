import styled from "styled-components";

export const SectionContainer = styled.section`
    position: relative;
    background-color: #3F3D3C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80rem;
    padding: 1rem ;
    gap: 2rem;
    color: #fff;
    box-shadow: 0 .2rem 1.5rem #222;
`;

export const ImageContainer = styled.div`
    max-width: 90%;
    position: relative;

    img{
        width: 100%;
        max-height: 45rem;
        border-radius: .6rem;
        box-shadow: 0 .4rem 1rem #000;
    }

    @media (max-width: 500px) {
        img {
            max-height: 30rem;
        }
    }
`;

export const ContainerInfo = styled.div`
    width: 90%;
    min-height: 35rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;   

    p{
        font-size: 2rem;
        font-weight: 600 ;
        letter-spacing: .2rem;
        span{
            font-weight: 500;
            font-size: 1.8rem;
            color: #B3B3B3 ;
        }
    }

    a{
        width: 15rem;
    }

    @media (max-width: 500px) {
      p{
        font-size: 1.5rem;

        span{
            font-size: 1.4rem;
        }
      }
    }

`;

export const ContainerTitle = styled.div`
    text-align: center;
    width: 90%;
    margin-top: 2rem;

    h2{
        font-size: 2.4rem;
        letter-spacing: .4rem;
    } 
    
    @media (max-width: 500px) {
        h2{
            font-size: 1.8rem;
        }
    }
`;

export const InfoStars = styled.div`
    position: absolute;
    right: -1rem;
    top: -1rem;

    svg{
        filter: drop-shadow( 0 .5rem .2rem #111);
    }

     span{
            background-color: #FE688B;
            font-size: 3rem;
            padding: .5rem ;
            margin-left: 1rem;
            border-radius: 50%;
            box-shadow: 0 .2rem .7rem #111;
        }

    @media (max-width: 500px) {
        span{
            font-size: 2rem;
        }
    }
`;

export const InfoDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: start;
    padding-bottom: 1rem;
`;

export const PlayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: rgba(0,0,0, 0.4);
    width: 100%;
    border-radius: 3rem;
    padding: .5rem 0;
    cursor: pointer;
    transition: all .5s ease-in;

    h2{
        font-size: 2rem;
        color: #fff;
        letter-spacing: .4rem;
    }

    svg{
        font-size: 3rem;
        color:#d00916 ;
    }

    &:hover{
        box-shadow: 0 0 1rem #d00916;
    }

    @media (max-width: 500px) {
        h2{
            font-size: 1.5rem;
        }

        svg{
            font-size: 2rem;
        }
    }
`;