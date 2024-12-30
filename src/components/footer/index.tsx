import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import * as S from './style';

export const Footer = () => {
    return(
        <S.Footer>
            <S.Container>
                <p>&copy; <span>2024</span> Ivo Ryan. Todos os direitos reservados.</p>
                <a href="/privacy-policy" >Política de Privacidade</a>
            </S.Container>
            <S.Contact>
                <S.WhatsContainer><a href="/"><FaWhatsapp/></a></S.WhatsContainer>
                <S.TelegContainer><a href="/"><FaTelegram/></a></S.TelegContainer>
                <S.LinkedContainer> <a href="/"><FaLinkedin/></a></S.LinkedContainer>
            </S.Contact>
        </S.Footer>
    )
}