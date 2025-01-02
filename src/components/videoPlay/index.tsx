import * as S from './style';
import poster from '../../assets/poster.webp';
import { UseApi } from './useApi';
import { Loader } from '../loader';

export const VideoPlay = () => {

  const { movie , isLoading } = UseApi();

  return (

    <S.SectionContainer>
     { 
      isLoading === true ? <Loader/> :
      <>
        <S.TitleContainer>
          <span></span>
          <h2>{movie[0]?.name}</h2>
          <span></span>
        </S.TitleContainer>

          <S.VideoContainer>
          <a href={movie[0]?.url} target="_blank" rel="noopener noreferrer">
            <S.StyledVideo preload="metadata"  poster={poster}/>
            </a>
          </S.VideoContainer>

          <S.DescriptionContainer>
          
            <p>
              Sinopse:
              <span>
                {movie[0]?.description}
              </span>
            </p>
          </S.DescriptionContainer>
        </>
        }

    </S.SectionContainer>

    );
  };