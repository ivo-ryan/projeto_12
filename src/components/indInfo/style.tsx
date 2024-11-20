import styled from "styled-components";

export const SectionContainer = styled.section`
    position: relative;
    background-color: #3F3D3C;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 45rem;
    padding: 2rem ;
    gap: 2rem;
    color: #fff;
    box-shadow: 0 .2rem 1.5rem #222;
`;

export const ImageContainer = styled.div`
    max-width: 50%;
   

    img{
        width: 100%;
        max-height: 40rem;
        border-radius: .6rem;
        box-shadow: 0 .4rem 1rem #000;
    }
`;

export const ContainerInfo = styled.div`
    width: 50%;
    min-height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2{
        font-size: 4rem;
        letter-spacing: 1rem;
    }

    p{
        font-size: 2rem;
        line-height: 3rem;
        letter-spacing: .2rem;
    }

    div{
        display: flex;
        gap: .3rem;
    }

    svg{
        font-size: 3rem;
        color: orange;
    }

    a{
        width: 15rem;
    }

`;

export const InfoStars = styled.div`
    padding-top: 1rem;

    svg{
        filter: drop-shadow( 0 .5rem .2rem #111);
    }

     span{
            background-color: #FE688B;
            font-size: 2rem;
            padding: .5rem ;
            margin-left: 1rem;
            border-radius: 50%;
            box-shadow: 0 .2rem .7rem #111;
        }
`;

export const InfoDetails = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem 0;

    p {
        font-weight: 600 ;
        letter-spacing: .2rem;
        span{
            font-weight: 500;
            color: #B3B3B3 ;
        }
    }
`;

export const PlayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background-color: rgba(0,0,0, 0.4);
    width: 15rem;
    border-radius: 3rem;
    padding: .5rem 0;
    cursor: pointer;
    transition: all .5s ease-in;

    h2{
        font-size: 2rem;
        color: #fff;
    }

    svg{
        color:#d00916 ;
    }

    &:hover{
        box-shadow: 0 0 1rem #d00916;
    }
`;