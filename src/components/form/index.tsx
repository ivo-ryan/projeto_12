import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from './style';
import { useState } from "react";

const schema = z.object({
    user: z.string().min(5, 'Nome de usuário inválido!'),
    email: z.string().min(5, 'Digite um email válido!')
});

type FormDataProps = z.infer<typeof schema>;


export const Form = () => {
    const [  ] = useState(false);

    const { register, handleSubmit , formState: {errors} } = useForm<FormDataProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schema),
    });

    return(
        <S.SectionContainer>

            <S.FormContainer>
                    <h2>Cadastre - se </h2>
                <form onSubmit={handleSubmit((e) => console.log(e))}>
                    <S.Input type="text" {...register("user")} placeholder="User"/>
                    {errors && <S.ErroMessage>{errors.user?.message}</S.ErroMessage>}
                    <S.Input type="text" {...register('email')} placeholder="Email" />
                    {errors && <S.ErroMessage>{errors.email?.message}</S.ErroMessage>}
                    <S.Button type="submit">Enviar</S.Button>
                </form>

                <S.IsAutenticated>
                    <p>Já sou cadastrado!</p>
                </S.IsAutenticated>

            </S.FormContainer>
        </S.SectionContainer>
    )
}