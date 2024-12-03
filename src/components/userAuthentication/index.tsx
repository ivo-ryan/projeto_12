import { useForm } from 'react-hook-form';
import * as S from './style';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
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

    const { handleSubmit, formState: {errors}, register, watch  } = useForm<FormProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    });

    const [ getUser , setGetUser ] = useState<FormProps>({
        user: ''
    });    

    const navigate = useNavigate();

    const watchUser = watch('user');

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('https://movie-api-cwkr.onrender.com/user');
            const res = req.data;
            const filterUser = res.filter((user:FormProps) => user.user === watchUser );
      
            if(!filterUser.length || getUser.user.length === 0 || !filterUser){
                return console.log('parei aqui');
                
            }else{
                navigate(`/dashboard/${getUser.user}`);
            }                
        }

        fetchData();
    },[getUser]);


    const handleSubmitForm = (e:FormProps) => {       
        setGetUser(e)
    }

    return(
        <S.FormContainer>
            <h2>Digite seu nome de usuário! </h2>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <S.Input type="text" {...register("user", { required: true })} placeholder="User name" erro={!!errors.user?.message}/>
                    {errors && <S.ErroMessage>{errors.user?.message}</S.ErroMessage>}

                       <S.Button>Entrar</S.Button>
            
                </form>

                <S.IsAutenticated>
                    <p onClick={() => setAutenticated(false)}>Não sou cadastrado!</p>
                </S.IsAutenticated>
        </S.FormContainer>
    )
}