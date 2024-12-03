import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from './style';
import { useState } from "react";
import { UserAuthentication } from "../userAuthentication";
import axios from "axios";

const schema = z.object({
    email: z.string().email('Digite um email válido'),
    user: z.string().min(5, 'Nome de usuário inválido!')});

type FormDataProps = z.infer<typeof schema>;


export const Form = () => {
    const [ autenticated, setAutenticated  ] = useState(false);

    const { register, handleSubmit , formState: {errors} , reset} = useForm<FormDataProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schema),
    });

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
            })

            console.log(req.status);
            console.log(e);
            
            
            reset();

            if(req.status === 200){
                return setAutenticated(true);
            };
            
        }

        data();
        
    }

    return(
        <S.SectionContainer>

           <S.FormContainer>
           { autenticated === false ? ( <> 
                <h2>Cadastre - se </h2>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <S.Input type="text" {...register("user")} placeholder="User" erro={!!errors.user?.message}/>
                    {errors && <S.ErroMessage>{errors.user?.message}</S.ErroMessage>}
                    <S.Input type="text" {...register('email')} placeholder="Email"  erro={!!errors.email?.message}/>
                    {errors && <S.ErroMessage>{errors.email?.message}</S.ErroMessage>}
                    <S.Button type="submit">Enviar</S.Button>
                </form>

                <S.IsAutenticated>
                    <p  onClick={() => handleClickAutenticated()}>Já sou cadastrado!</p>
                </S.IsAutenticated>
                </>  
                ) : <UserAuthentication setAutenticated={setAutenticated}/>}
            </S.FormContainer>

                
        </S.SectionContainer>
    )
}