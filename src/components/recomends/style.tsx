import styled from "styled-components";


export const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-image: url('https://wallpapercave.com/wp/wp4951502.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
    padding: 3rem 2rem ;
    color: #fff;

    h2{
        font-size: 2rem;
        letter-spacing: .4rem;
    }

`;

export const ContainerCards = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    

    @media (max-width: 500px) {
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;  
        flex-wrap: nowrap;

    }
    
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }


`;

export const CardContainer = styled.div`
        position: relative;
        flex: 0 0 auto; 
        width: 25rem;
        height: 30rem;
        display: block;
        border-radius: 1rem;
`;

export const Card = styled.div`
    width: 100%;
    border-radius: 1rem;
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
        object-fit: cover;
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
    z-index: 2;
`;

export const ScrollButtonLeft = styled.div`

`;

export const ScrollButtonRight = styled.div`

`;