import { FaPlay } from 'react-icons/fa';
import * as S from './style';
import { Link } from 'react-router-dom';
import { UseMoviesApi } from './useMoviesApi';



export const Recomends = () => {
    const { moviesCurr } = UseMoviesApi();

    return(
        <S.SectionContainer>

            <h2>
                Recomendados
            </h2>

            <S.ContainerCards>

            {moviesCurr.map((movie, index) => {
                return(
                    <Link to={`/${movie.name}`} key={index}>
                    <S.Card>
                        <S.ImageContainer>
                            <img src={movie.banner_small} alt={movie.name} />
                            <S.PlayContainer>
                                <FaPlay />
                            </S.PlayContainer>
                        
                        </S.ImageContainer>
                        <S.Ponts>
                            {movie.nota}
                        </S.Ponts>
    
                    </S.Card>
                </Link>
                )
            })}
             

            
            </S.ContainerCards>

        </S.SectionContainer>
    )
}