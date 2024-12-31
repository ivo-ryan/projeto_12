import { FaPlayCircle } from 'react-icons/fa';
import * as S from './style';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { UseMoviesApi } from './useMoviesApi';

export const IndInfo = () => {
    
    const { movie } = UseMoviesApi();
    const { name } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const handleClickNavigate = () => {
        navigate(`/${name}/play`,{ state: { userName: location.state?.userName }} );
    };
    
    return(
        <S.SectionContainer>

            <S.ContainerTitle>
                <h2>{movie[0]?.name}</h2>


            </S.ContainerTitle>

            <S.ImageContainer>
                <img src={movie[0]?.banner_large} alt={movie[0].name} />
                <S.InfoStars>
                    <span>
                       {movie[0]?.nota}
                    </span>
                </S.InfoStars>
            </S.ImageContainer>

            <S.ContainerInfo>

                <p>
                  Sinopse: <span> {movie[0]?.description} </span> 
                </p>


                <S.InfoDetails>
                    <p>
                        Ano: <span>{movie[0]?.lancamento}</span>
                    </p>

                    <p>
                        Duração: <span>{movie[0]?.duracao}</span>
                    </p>
                </S.InfoDetails>

                <S.PlayContainer onClick={() => handleClickNavigate()} aria-label='button'>
                    <h2>Play</h2><FaPlayCircle/>
                </S.PlayContainer>
        

            </S.ContainerInfo>
        </S.SectionContainer>
    )
}