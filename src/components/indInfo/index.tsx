import { FaPlayCircle } from 'react-icons/fa';
import * as S from './style';
import { Link, useParams } from 'react-router-dom';
import { UseMoviesApi } from './useMoviesApi';

export const IndInfo = () => {
    
    const { movie } = UseMoviesApi();
    const { name } = useParams();
    
    return(
        <S.SectionContainer>

            <S.ContainerTitle>
                <h2>{movie[0]?.name}</h2>


            </S.ContainerTitle>

            <S.ImageContainer>
                <img src={movie[0]?.banner_large} alt="" />
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

                <Link to={`/${name}/play`}>
                <S.PlayContainer>
                    <h2>Play</h2><FaPlayCircle/>
                </S.PlayContainer>
                </Link>
        

            </S.ContainerInfo>
        </S.SectionContainer>
    )
}