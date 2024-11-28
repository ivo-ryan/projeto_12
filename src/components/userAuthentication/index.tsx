import { useForm } from 'react-hook-form';
import * as S from './style';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    user: z.string().min(5, 'Usuário inválido!')
});

type FormProps = z.infer<typeof schema>;

export const UserAuthentication = () => {
    const { handleSubmit, formState: {errors}, register } = useForm<FormProps>({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    });

    return(
        <S.FormContainer>
            <h2>Entrar </h2>
                <form onSubmit={handleSubmit((e) => console.log(e))}>
                    <S.Input type="text" {...register("user")} placeholder="User name"/>
                    {errors && <S.ErroMessage>{errors.user?.message}</S.ErroMessage>}
                    <S.Button type="submit">Enviar</S.Button>
                </form>
        </S.FormContainer>
    )
}