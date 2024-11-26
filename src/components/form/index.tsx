import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from './style';

const schema = z.object({
    user: z.string().min(5, 'Nome de usuário inválido!'),
    email: z.string().min(5, 'Digite um email válido!')
});

type FormDataProps = z.infer<typeof schema>;


export const Form = () => {

    const { register, handleSubmit , formState: {errors} } = useForm<FormDataProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schema),
    });

    return(
        <S.SectionContainer>
            <S.FormContainer onSubmit={handleSubmit((e) => console.log(e))}>
                <h2>Cadastre - se </h2>
                <S.Input type="text" {...register("user")} placeholder="User"/>
                {errors && <S.ErroMessage>{errors.user?.message}</S.ErroMessage>}
                <S.Input type="text" {...register('email')} placeholder="Email" />
                {errors && <S.ErroMessage>{errors.email?.message}</S.ErroMessage>}
                <S.Button type="submit">Enviar</S.Button>
            </S.FormContainer>
        </S.SectionContainer>
    )
}