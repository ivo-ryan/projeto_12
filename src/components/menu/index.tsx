
import { useLocation } from 'react-router';
import * as S from './style';
import { FaUserCircle } from 'react-icons/fa';

export const Menu = () => {

    const location = useLocation();

    return(
        <S.Header>
            <S.Menu>
                <li><h2>Movie</h2></li>
                <li> <h3>{location.state?.userName}</h3> <FaUserCircle/> </li>         
            </S.Menu>

        </S.Header>
    )
}