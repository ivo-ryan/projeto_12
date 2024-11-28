import styled from "styled-components";


export const SectionContainer = styled.section`
    background-image: url('https://wallpapercave.com/wp/wp4951502.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
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

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 500px) {
      width: 90%;
    }
`;

export const StyledVideo = styled.video`
  width: 100%;
  max-height: 50rem;
  border-radius: .8rem;
  @media (max-width: 768px) {
    max-height: 40rem;
  }
`;

export const TitleContainer = styled.div`
  background-color:rgba(255, 255, 255 , 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 .5rem;
  gap: .5rem;
  width: 90%;
  padding-top:3rem;

  h2{
    text-align: center;
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

  @media (max-width: 768px) {
    width: 95%;
    h2{
      font-size: 1.9rem;
    }

    span{
      width: 20rem;
    }

    @media (max-width: 500px) {
      span{
        width: 4rem;
      }
    }
  }
`;


export const DescriptionContainer = styled.div`
  background-color: #333;
  width: 70%;
  padding: 3rem;
  min-height: 10rem;
  box-shadow: 0 .4rem 1rem #111;


  p{
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: .2rem;

    
    span{
      color: #B3B3B3;
      font-size: 1.8rem;
      letter-spacing: .2rem;
      padding-left: 1rem;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    p{
      font-size: 1.6rem;
      
      span{
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;