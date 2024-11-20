import * as S from './style';
import poster from '../../assets/poster.webp';
import { UseApi } from './useApi';

export const VideoPlay = () => {

  const { movie } = UseApi();

  return (

    <S.SectionContainer>

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
        <h3>Sinopse:</h3>
        <p>
         {movie[0]?.description}
        </p>
      </S.DescriptionContainer>
    </S.SectionContainer>

    );
  };