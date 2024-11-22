import * as S from './style';
import { FaPlay } from 'react-icons/fa';
import { UseApi } from '../UseApi/useApi';
import $ from 'jquery';
import {  useEffect, useState } from 'react';
import { MoviesTypes } from '../../types/MoviesTypes';
import { Link } from 'react-router-dom';


export const Detiong = ()=> {

    const [ imgCurrent, setImgCurrent ] = useState(0);
    const [ movie , setMovie ] = useState<MoviesTypes[]>([])

    const { movies } = UseApi();
    
   
    useEffect(() => {

        const initSlider = () => {
            
            const items = movies.length;

            if (imgCurrent === items - 1) {
                setImgCurrent(0);     
            }
            
            const itemFilter = movies.filter(( _, index) => index === imgCurrent);
            setMovie(itemFilter);  
        }

        setTimeout(() => {
                
                $('.container-img img').fadeOut(200);
            
                $('.span-container span').css('background', '#B3B3B3').css('transform', 'scale(1)');

                setImgCurrent(imgCurrent + 1);

                $('.container-img img').eq(imgCurrent + 1).fadeIn(400);
                
                $('.span-container span').eq(imgCurrent +1 ).css('background', '#7acbeb').css('transform', 'scale(1.2)');
        

        }, 4000);
        
        initSlider();
        
    }, [imgCurrent]);



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
                        {movie[0]?.name}
                    </h2>
                    
                </S.MovieInfo>

                <S.ButtonContainer>
                    <Link to={`/${movie[0]?.name}`}>
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