import { useForm } from "react-hook-form";
import * as S from './style';
import { useState } from "react";
import { UserAuthentication } from "../userAuthentication";
import axios from "axios";
import { FormComponent, FormDataProps } from "./formComponent";

export const Form = () => {
    const [ autenticated, setAutenticated  ] = useState<boolean>(false);
    const { reset } = useForm();

    const handleClickAutenticated = () => {
        if (autenticated === false) {
            setAutenticated(true);
        }else{
            setAutenticated(false)
        }
    }
  
    const handleFormSubmit = (e:FormDataProps) => {
        
        const data = async () => {
            const req = await axios.post('https://movie-api-cwkr.onrender.com/user', {
                user: e.user,
            });
            
            reset();

            if(req.status === 200){
                return setAutenticated(true);
            };
            
        };

        data();
        
    }

    return(
        <S.SectionContainer>

           <S.FormContainer>
           { autenticated === false ? ( <> 
                <h2>Cadastre - se </h2>
                <FormComponent handleFormSubmit={handleFormSubmit}/>

                <S.IsAutenticated>
                    <p  onClick={() => handleClickAutenticated()}>Já sou cadastrado!</p>
                </S.IsAutenticated>
                </>  
                ) : <UserAuthentication setAutenticated={setAutenticated}/>}
            </S.FormContainer>

                
        </S.SectionContainer>
    )
}