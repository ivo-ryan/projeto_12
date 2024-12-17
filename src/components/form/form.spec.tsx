import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { it, describe, expect, vitest } from 'vitest';
import { FormComponent } from './formComponent';
import '@testing-library/jest-dom';
import { act } from 'react';
import userEvent from '@testing-library/user-event';

const handleFormSubmit = vitest.fn();


describe("<Form/>", () => {
    it('should render in the document', async () => {
        render(<FormComponent handleFormSubmit={handleFormSubmit}/>);

        const inputUser = screen.getByPlaceholderText(/user/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);
        const button  = screen.getByRole('button', {name: /cadastrar/i});

        expect(inputUser).toBeVisible();
        expect(inputEmail).toBeVisible();
        expect(button).toBeVisible();
    });

    it('should show error message', async () => {
        render(<FormComponent handleFormSubmit={handleFormSubmit}/>);
        const buttonSubmit  = screen.getByRole('button', {name: /cadastrar/i});
        
        fireEvent.click(buttonSubmit);

        await waitFor(() => {
            expect(screen.getByText(/Digite um email válido/i)).toBeVisible();
            expect(screen.getByText(/Nome de usuário inválido!/i)).toBeVisible();
        });
        
    });

    it('should type into user and email fields and submit form ', async () => {
        render(<FormComponent handleFormSubmit={handleFormSubmit}/>);

        const inputUser = screen.getByPlaceholderText('User');
        const inputEmail = screen.getByPlaceholderText('Email');
        const buttonSubmit  = screen.getByRole('button', {name: /cadastrar/i});

        await userEvent.type(inputUser, 'Satoru Gojo');
        await userEvent.type(inputEmail, 'satoru@gmail.com');
        fireEvent.click(buttonSubmit);

        await waitFor(() => {
            expect(screen.queryByText(/Nome de usuário inválido/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/Digite um email válido/i)).not.toBeInTheDocument();
        });

        expect(inputUser).toHaveValue('Satoru Gojo');
        expect(inputEmail).toHaveValue('satoru@gmail.com');

        await waitFor(() => {
            expect(handleFormSubmit).toHaveBeenCalledTimes(1);
            expect(handleFormSubmit).toHaveBeenCalledWith({
                user: 'Satoru Gojo',
                email: 'satoru@gmail.com'
            }, expect.anything());
        });
    });
});