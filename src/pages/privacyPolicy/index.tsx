import { Link } from 'react-router-dom';
import * as S from './style';

export const PrivacyPolicy = () => {
    return (
      <S.Container>
        <S.Title>Política de Privacidade</S.Title>
        <S.Text><strong>Última atualização:</strong> 03/11/2024</S.Text>

       <Link to={'/'}>
       <S.Text><strong>RETORNAR</strong></S.Text>
       </Link> 

        <S.SectionTitle>1. Introdução</S.SectionTitle>
        <S.Text>
          Bem-vindo e essa plataforma de Streaming que têm como finalidade ser um projeto, mesmo sendo apenas um projeto eu me comprometo a proteger a privacidade dos usuários . Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos as informações pessoais que você nos fornece ao usar nossa plataforma de streaming de filmes.
        </S.Text>
        
        <S.SectionTitle>2. Informações que Coletamos</S.SectionTitle>
        <S.Text><strong>2.1 Informações Pessoais</strong></S.Text>
        <S.List>
          <S.ListItem>Nome de Usuário</S.ListItem>
          
        </S.List>
        <S.Text><strong>2.2 Informações de Uso</strong></S.Text>
        <S.Text>Coletamos informações sobre como você usa a nossa plataforma, incluindo:</S.Text>
        <S.List>
          <S.ListItem>Filmes e séries assistidos</S.ListItem>
          <S.ListItem>Tempo de visualização e preferências de conteúdo</S.ListItem>
          <S.ListItem>Histórico de navegação na plataforma</S.ListItem>
          <S.ListItem>Interações com recomendações e preferências de conteúdo</S.ListItem>
        </S.List>
        
        <S.SectionTitle>3. Como Usamos Suas Informações</S.SectionTitle>
        <S.Text>Usamos suas informações pessoais para:</S.Text>
        <S.List>
          <S.ListItem>Processar e gerenciar sua conta</S.ListItem>
          <S.ListItem>Oferecer conteúdo personalizado, incluindo recomendações baseadas em seu histórico de visualização</S.ListItem>
          <S.ListItem>Melhorar nossos serviços e funcionalidades da plataforma</S.ListItem>
          <S.ListItem>Enviar comunicações de marketing, promoções e novidades</S.ListItem>
          <S.ListItem>Processar transações e cobranças</S.ListItem>
        </S.List>
        
        <S.SectionTitle>4. Compartilhamento de Informações com Terceiros</S.SectionTitle>
        <S.Text>Compartilhamos suas informações pessoais apenas nas seguintes situações:</S.Text>
        <S.List>
          <S.ListItem><strong>Provedores de Serviços</strong>: Compartilhamos informações com provedores que nos ajudam a operar a plataforma.</S.ListItem>
          <S.ListItem><strong>Cumprimento da Lei</strong>: Divulgamos informações para cumprir com leis e regulamentações.</S.ListItem>
        </S.List>
        
        <S.SectionTitle>5. Segurança dos Dados</S.SectionTitle>
        <S.Text>
          Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso, alteração, divulgação ou destruição não autorizada.
        </S.Text>
        
        <S.SectionTitle>6. Retenção de Dados</S.SectionTitle>
        <S.Text>
          Armazenamos suas informações pessoais enquanto sua conta estiver ativa ou enquanto for necessário para fornecer os serviços da plataforma.
        </S.Text>
        
        <S.SectionTitle>7. Seus Direitos de Privacidade</S.SectionTitle>
        <S.Text>Dependendo de onde você reside, pode ter os seguintes direitos em relação aos seus dados pessoais:</S.Text>
        <S.List>
          <S.ListItem>Acesso aos seus dados</S.ListItem>
          <S.ListItem>Correção de informações imprecisas</S.ListItem>
          <S.ListItem>Exclusão de suas informações pessoais</S.ListItem>
          <S.ListItem>Restrição de processamento</S.ListItem>
        </S.List>
        
        <S.SectionTitle>8. Cookies e Tecnologias Semelhantes</S.SectionTitle>
        <S.Text>
          Nossa plataforma usa cookies e tecnologias semelhantes para melhorar a experiência do usuário.
        </S.Text>
        
        <S.SectionTitle>9. Alterações na Política de Privacidade</S.SectionTitle>
        <S.Text>
          Podemos atualizar esta Política de Privacidade de tempos em tempos para refletir mudanças em nossas práticas.
        </S.Text>
        
        <S.SectionTitle>10. Contato</S.SectionTitle>
        <S.Text>
          Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em: <br />
          <strong>E-mail:</strong> ryanbussines06@gmail.com<br />
        </S.Text>
      </S.Container>
    );
  };