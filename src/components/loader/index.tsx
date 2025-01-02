import { FaSpinner } from "react-icons/fa";
import * as S from './style';

export const Loader = () => {
    return(
        <S.LoaderContainer>
            <FaSpinner/>
        </S.LoaderContainer>
    )
}