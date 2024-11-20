import * as S from './style';
import { FaPlay} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UseApi } from '../UseApi/useApi';

export const MoviesList = () => {
   
    const { movies } = UseApi();

    return(
        <S.ContainerMovies>
        
        
        <S.SectionContainer>

            <h2>
               Movies
            </h2>

            <S.CardContainer>

            {movies.map((movie, index) => {
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

           

            </S.CardContainer>

        </S.SectionContainer>
        
        </S.ContainerMovies>
    )
}