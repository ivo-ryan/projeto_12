import { useForm } from 'react-hook-form';
import * as S from './style';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';

const schema = z.object({
    user: z.string().min(5, 'Usuário inválido!')
});

type FormProps = z.infer<typeof schema>;

type AutenticatedProps = {
    setAutenticated: React.Dispatch<React.SetStateAction<boolean>>
} 

export const UserAuthentication = ({setAutenticated}:AutenticatedProps) => {
    const { handleSubmit, formState: {errors}, register } = useForm<FormProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    });

    return(
        <S.FormContainer>
            <h2>Digite seu nome de usuário! </h2>
                <form onSubmit={handleSubmit((e) => console.log(e))}>
                    <S.Input type="text" {...register("user")} placeholder="User name"/>
                    {errors && <S.ErroMessage>{errors.user?.message}</S.ErroMessage>}

                    <S.ButtonContainer>
                        <Link to={`/dashboard`}>
                        <button type="submit">Entrar</button>                 
                        </Link>

                    </S.ButtonContainer>
                </form>

                <S.IsAutenticated>
                    <p onClick={() => setAutenticated(false)}>Não sou cadastrado!</p>
                </S.IsAutenticated>
        </S.FormContainer>
    )
}