import * as S from './style';
import { FaPlay } from 'react-icons/fa';
import { UseApi } from '../UseApi/useApi';
import $ from 'jquery';
import { useState } from 'react';
//import { MoviesTypes } from '../../types/MoviesTypes';
import { Link } from 'react-router-dom';


export const Detiong = ()=> {

    const [ imgCurrent, setImgCurrent ] = useState(0);

    const { movies } = UseApi();

    const initSlider = () => {
        $('.container-img img').hide();
        $('.container-img img').eq(0).show();
    }

    initSlider()

    
    const changeSlide = () => {
        const maxSlide = movies.length -1 ;
        var curSlide = 0;
        console.log(curSlide)

        setTimeout(() => {
            $('.container-img img').eq(curSlide).fadeOut(1000);
            curSlide += 1;

            console.log(curSlide)

            if( curSlide > maxSlide) {
                curSlide = 0;
                setImgCurrent(0);
            }

            $('.container-img img').eq(curSlide).fadeIn(2000);
            setImgCurrent(curSlide); 
            
        }, 3000)
    }

    changeSlide()



    return(
        <S.SectionContainer>
            <S.Container>
                <S.ContainerImg className='container-img'>

                    {movies.map((item, index) => {
                        return(
                            <img src={item.banner_large} alt={item.name}  key={index}/>
                        )
                    })}
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