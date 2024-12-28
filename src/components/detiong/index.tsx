import * as S from './style';
import { FaPlay } from 'react-icons/fa';
import { UseApi } from '../UseApi/useApi';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const Detiong = ()=> {

  const [imgCurrent, setImgCurrent] = useState(0);
  const { movies } = UseApi();
  const location = useLocation();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (movies.length === 0) return;
    initSlider();

    const interval = setInterval(() => {
      changeSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [movies]);

  const initSlider = () => {
    $(".container-img img").eq(0).fadeIn();
    $('.span-container span').eq(0).css('background', '#7acbeb').css('transform', 'scale(1.2)');
  };

  const changeSlide = () => {
    const maxSlide = movies.length - 1;

    $('.span-container span').css('background', '#B3B3B3').css('transform', 'scale(1)');

    setImgCurrent((prevImgCurrent) => {
      const nextSlide = prevImgCurrent >= maxSlide ? 0 : prevImgCurrent + 1;

        $(".container-img img").eq(prevImgCurrent).fadeOut(1000, () => {
            $(".container-img img").eq(nextSlide).fadeIn(1000);
            $('.span-container span').eq(nextSlide).css('background', '#7acbeb').css('transform', 'scale(1.2)').css('transition', 'all .5s ease');
         });


      return nextSlide;
    });
  };

  const handleNavigate = () => {
    navigate(`/${movies[imgCurrent]?.name}`, {state: {userName: location.state?.userName}});
  }

    return(
        <S.SectionContainer>
            <S.Container>
                <S.ContainerImg className="container-img" >
                    {movies.map((movie, index) => (
                        <img key={index} src={movie.banner_large} alt={`Slide ${index}`} />
                    ))}
                </S.ContainerImg>
                <S.Overlay></S.Overlay>

                <S.MovieInfo>
                    <h2>
                        {movies[imgCurrent]?.name}
                    </h2>
                    
                </S.MovieInfo>

                <S.ButtonContainer >                 
                    <button onClick={() => handleNavigate()}><FaPlay/>Play</button>      
                </S.ButtonContainer>

                <S.ContainerIndex className='span-container' >
                    {movies.map((_, index) => {
                        return(
                                <span key={index} ></span>
                            )
                        })}
                </S.ContainerIndex>

            </S.Container>
        </S.SectionContainer>
    )
};