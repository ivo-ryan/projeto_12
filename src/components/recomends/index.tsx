import { FaPlay } from 'react-icons/fa';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { UseMoviesApi } from './useMoviesApi';



export const Recomends = () => {
    const { moviesCurr } = UseMoviesApi();

    const location = useLocation();
    const navigate = useNavigate();

    const handleClickNavigation = (name:string) => {
        navigate(`/${name}`, {state: { userName: location.state?.userName }});
    };

    return(
        <S.SectionContainer>

            <h2>
                Recomendados
            </h2>

            <S.ContainerCards>

            {moviesCurr.map((movie, index) => {
                return(
                    <S.CardContainer key={index} onClick={() => handleClickNavigation(movie.name)}>
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
    
                    </S.CardContainer>
                )
            })}
          
            </S.ContainerCards>

        </S.SectionContainer>
    )
}