import * as S from './style';
import { FaPlay} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { UseApi } from '../UseApi/useApi';
import { Loader } from '../loader';

export const MoviesList = () => {
   
    const { movies, isLoading } = UseApi();
    const location = useLocation();
    const navigate = useNavigate();

    const handleClickNavigation = (name:string) => {
        navigate(`/${name}`, {state: { userName: location.state?.userName }})
    };

    return(
        <S.ContainerMovies>  
        
        <S.SectionContainer>

            <h2>
               Movies
            </h2>

            {
                
            isLoading === true ? <Loader/> :
                
            <S.CardContainer>

            {movies.map((movie, index) => {
                return(
                    <S.Card key={index} onClick={() => handleClickNavigation(movie.name)}>
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
                )
            })}    

            </S.CardContainer>

            }

        </S.SectionContainer>
        
        </S.ContainerMovies>
    )
}