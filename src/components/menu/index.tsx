
import { useLocation, useNavigate, useParams } from 'react-router';
import * as S from './style';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import logo  from '../../assets/logo.jpg'

export const Menu = () => {

    const location = useLocation();
    const { name } = useParams();
    const navigate = useNavigate();

    const url = decodeURIComponent(location.pathname);

    const handleClickNavigation = () => {
        if(url === `/${name}/play`){
           return navigate(`/${name}`, {state: {userName: location.state?.userName}});
        }else{
            return navigate(`/dashboard`, {state: {userName: location.state?.userName}});
        }
    };
    

    return(
        <S.Header>
            <S.Menu>
                <S.ContainerBack><S.ContainerImage>
                        <img src={logo} alt="Logo do projeto" />
                    </S.ContainerImage>
                    {url === `/dashboard` ? null : (
                        <S.ArrowContainer >
                            <FaArrowLeft onClick={() => handleClickNavigation()} aria-label='voltar'/>
                        </S.ArrowContainer>
                    )}
                </S.ContainerBack>
                <li> <h3>{location.state?.userName}</h3> <FaUserCircle/> </li>         
            </S.Menu>

        </S.Header>
    );
};