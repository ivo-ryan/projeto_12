import { useForm } from 'react-hook-form';
import * as S from './style';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const schema = z.object({
    user: z.string().min(5, 'Usuário inválido!')
});

type FormProps = z.infer<typeof schema>;

type AutenticatedProps = {
    setAutenticated: React.Dispatch<React.SetStateAction<boolean>>
} 

export const UserAuthentication = ({setAutenticated}:AutenticatedProps) => {
    const { handleSubmit, formState: {errors}, register, watch , getValues } = useForm<FormProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    });
    const [ autentication, setAutentication ] = useState(false);
    const [ user, setUser ] = useState('');

    
    const getUser = getValues('user');
    const watchUser = watch('user');

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('https://movie-api-cwkr.onrender.com/user');
            const res = req.data;
            const filterUser = res.filter((user:FormProps) => user.user === watchUser );

            if(filterUser.length === 0){
                setAutentication(false);
            }else{
                setAutentication(true);
                setUser(filterUser[0].user);
            }         
            
        }

        fetchData()
    },[getUser]);

    return(
        <S.FormContainer>
            <h2>Digite seu nome de usuário! </h2>
                <form onSubmit={handleSubmit((e) => console.log(e))}>
                    <S.Input type="text" {...register("user")} placeholder="User name" erro={!!errors.user?.message}/>
                    {errors && <S.ErroMessage>{errors.user?.message}</S.ErroMessage>}

                    {
                        autentication === true ? (
                            <S.ButtonContainer>
                        <Link to={`/dashboard/${user}`}>
                        <button type="submit">Entrar</button>                 
                        </Link>

                    </S.ButtonContainer>
                        ):(
                            <S.ButtonContainer>
                        <Link to={`/`}>
                        <button type="submit">Entrar</button>                 
                        </Link>

                    </S.ButtonContainer>
                        )
                    }
            
                </form>

                <S.IsAutenticated>
                    <p onClick={() => setAutenticated(false)}>Não sou cadastrado!</p>
                </S.IsAutenticated>
        </S.FormContainer>
    )
}