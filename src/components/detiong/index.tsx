import * as S from './style';
import { FaPlay } from 'react-icons/fa';
import { UseApi } from '../UseApi/useApi';
import $ from 'jquery';
import { useEffect, useState } from 'react';
//import { MoviesTypes } from '../../types/MoviesTypes';
import { Link } from 'react-router-dom';


export const Detiong = ()=> {

  const [imgCurrent, setImgCurrent] = useState(0); // Gerencia o índice do slide atual
  const { movies } = UseApi(); // Recupera os filmes (ou imagens)
  console.log(imgCurrent);
  

  useEffect(() => {
    if (movies.length === 0) return; // Garante que existam imagens

    // Inicializa o slider ao carregar o componente
    initSlider();

    // Configura o temporizador para alternar os slides
    const interval = setInterval(() => {
      changeSlide();
    }, 3000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, [movies]); // Executa quando `movies` mudar

  const initSlider = () => {
    $(".container-img img").eq(0).show(); // Mostra a primeira imagem
  };

  const changeSlide = () => {
    const maxSlide = movies.length - 1;

    // Atualiza o estado de `imgCurrent` de forma segura
    setImgCurrent((prevImgCurrent) => {
      const nextSlide = prevImgCurrent >= maxSlide ? 0 : prevImgCurrent + 1;

        $(".container-img img").eq(prevImgCurrent).fadeOut(1000, () => {
        // Exibe o próximo slide somente após o fadeOut terminar
            $(".container-img img").eq(nextSlide).fadeIn(1000);
         });


      return nextSlide; // Atualiza o índice do próximo slide
    });
  };

    return(
        <S.SectionContainer>
            <S.Container>
                <S.ContainerImg className="container-img">
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

                <S.ButtonContainer>
                    <Link to={`/${movies[imgCurrent]?.name}`}>
                    <button><FaPlay/>Play</button>
                    </Link>
                </S.ButtonContainer>

                <S.ContainerIndex className='span-container'>
                    {movies.map((_, index) => {
                        return(
                                <span key={index} ></span>
                            )
                        })}
                </S.ContainerIndex>

            </S.Container>
        </S.SectionContainer>
    )
}