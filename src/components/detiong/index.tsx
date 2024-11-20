import * as S from './style';
//import banner  from '../../assets/John-Wick.jpg';
import { FaPlay } from 'react-icons/fa';
import { UseApi } from '../UseApi/useApi';
//import $ from 'jquery';
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
            if (imgCurrent === items) {
                setImgCurrent(0);
            }
            
            const itemFilter = movies.filter(( _, index) => index === imgCurrent);
            setMovie(itemFilter)
         
        }

        setTimeout(() => {
            setImgCurrent(imgCurrent + 1)
        }, 4000);
        
        initSlider()
    }, [imgCurrent])

    return(
        <S.SectionContainer>
            <S.Container>
            <S.ContainerImg>
                <img src={movie[0]?.banner_large} alt={movie[0]?.name} />
            </S.ContainerImg>
            <S.Overlay></S.Overlay>
            <S.MovieInfo>
                <h2>
                    {movie[0]?.name}
                </h2>

                <Link to={`/${movie[0]?.name}`}>
                <button><FaPlay/>Play</button>
                </Link>

                <S.ContainerIndex >
                    {movies.map((_, index) => {
                        return(
                                <span key={index}></span>
                            )
                        })}
                </S.ContainerIndex>
                
            </S.MovieInfo>
            </S.Container>
        </S.SectionContainer>
    )
}