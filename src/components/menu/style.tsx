import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    z-index: 10;
    background-color: #3F3D3C;
    color: #fff;
    width: 100%;
    height: 7rem;
    box-shadow: 0 .5rem 1.4rem #111;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 3rem;

    li + li {
        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;

        svg{
            font-size: 1.5rem;
        }
    }

`;

export const ArrowContainer = styled.div`
    padding-top: 1rem ;

    svg{
        cursor: pointer;
        color: #42A5F5;
        font-size: 1.8rem;
        transition: all .5s ease ;
        animation: back-arrow alternate 1s infinite;

        &:hover{
            color: #1E88E5;
            transform: scale(1.1);
        }

        @keyframes back-arrow {
            to{
                transform: translateX(-.5rem);
            }
        }
    }
`;