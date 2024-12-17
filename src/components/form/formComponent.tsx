import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from './style';


const schema = z.object({
    email: z.string().email('Digite um email válido'),
    user: z.string().min(5, 'Nome de usuário inválido!')});

export type FormDataProps = z.infer<typeof schema>;

type FormProps = {
    handleFormSubmit: (data:FormDataProps) => void
}

export const FormComponent = ({handleFormSubmit}:FormProps) => {
    const { register, handleSubmit , formState: {errors} } = useForm<FormDataProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schema),
    });


    return(
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <S.Input type="text" {...register("user")} placeholder="User" erro={!!errors.user?.message}/>
            {errors && <S.ErroMessage>{errors.user?.message}</S.ErroMessage>}
            <S.Input type="text" {...register('email')} placeholder="Email"  erro={!!errors.email?.message}/>
            {errors && <S.ErroMessage>{errors.email?.message}</S.ErroMessage>}
            <S.Button type="submit">Cadastrar</S.Button>
        </form>
    )
}