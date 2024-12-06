import styled from "styled-components";

export const Header = styled.header`
    position: relative;
    z-index: 10;
    background-color: #3F3D3C;
    color: #fff;
    width: 100%;
    padding: 0 3rem;
    height: 7rem;
    box-shadow: 0 .5rem 1.4rem #111;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

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