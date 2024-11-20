import { FaPlayCircle } from 'react-icons/fa';
import * as S from './style';
import { Link, useParams } from 'react-router-dom';
import { UseMoviesApi } from './useMoviesApi';

export const IndInfo = () => {

    const { movie } = UseMoviesApi();
    const { name } = useParams();

    return(
        <S.SectionContainer>
            <S.ImageContainer>
                <img src={movie[0]?.banner_large} alt="" />
            </S.ImageContainer>

            <S.ContainerInfo>
                <h2>{movie[0]?.name.substring(0, 30)}...</h2>

                <p>
                    {movie[0]?.description.substring(0, 200)}...
                </p>

                <S.InfoStars>
                   <p>
                    Nota:
                    <span>
                       {movie[0]?.nota}
                    </span>
                    
                    </p>
                </S.InfoStars>

                <S.InfoDetails>
                    <p>
                        Ano: <span>{movie[0]?.lancamento}</span>
                    </p>

                    <p>
                        Duração: <span>{movie[0]?.duracao}</span>
                    </p>
                </S.InfoDetails>

                <Link to={`/${name}/play`}>
                <S.PlayContainer>
                    <h2>Play</h2><FaPlayCircle/>
                </S.PlayContainer>
                </Link>
        

            </S.ContainerInfo>
        </S.SectionContainer>
    )
}