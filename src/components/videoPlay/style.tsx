import styled from "styled-components";


export const SectionContainer = styled.section`
    background-color: #3F3D3C;
    width: 100%;
    min-height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
`;


export const VideoContainer = styled.div`
  max-width: 80rem;
  margin: auto;
  background-color: #333;
  padding: 1.6rem;
  border-radius: .8rem;
  box-shadow: 0 .4rem 1rem #111;
`;

export const StyledVideo = styled.video`
  width: 100%;
  max-height: 50rem;
  border-radius: .8rem;
`;

export const TitleContainer = styled.div`
  background-color:#3F3D3C ;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 90%;

  h2{
    color: #fff;
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: .3rem;
  }
  span{
    display: block;
    width: 40rem;
    background-color: #cccccc;
    height: .1rem;
  }
`;


export const DescriptionContainer = styled.div`
  background-color: #333;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  min-height: 10rem;
  gap: 1rem;
  box-shadow: 0 .4rem 1rem #111;


  h3{
    color: #fff;
    font-size: 2rem;
    letter-spacing: .2rem;

  }

  p{
    color: #B3B3B3;
    font-size: 1.8rem;
    letter-spacing: .2rem;
  }
`;