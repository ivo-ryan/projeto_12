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
                <S.WhatsContainer><a href="https://wa.me/5563992644269?text=OI%C3%A1%20Ryan%20,%20acabei%20vendo%20seu%20perfil%20no%20github%20e%20queria%20conversar!" target='_blank'><FaWhatsapp/></a></S.WhatsContainer>
                <S.TelegContainer><a href="https://t.me/ivo_ryan" target='_blank'><FaTelegram/></a></S.TelegContainer>
                <S.LinkedContainer> <a href="https://www.linkedin.com/in/ryan-bastos-a0a8262a7/" target='_blank' ><FaLinkedin/></a></S.LinkedContainer>
            </S.Contact>
        </S.Footer>
    )
}