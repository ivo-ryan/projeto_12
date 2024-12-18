import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { UserAuthentication } from '.';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

const setAutenticated = vi.fn();

vi.mock('axios', () => ({
    get: vi.fn(),
  }));

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

describe('<UserAuthentication/>', () => {
    it('should render form in screen ', () => {
        render(
        <BrowserRouter>
            <UserAuthentication setAutenticated={setAutenticated}/>
        </BrowserRouter>
        );

        const inputUser = screen.getByPlaceholderText('User name');
        const button = screen.getByRole('button', {name: /entrar/i});
        expect(inputUser).toBeVisible();
        expect(button).toBeVisible();
    });

    it('should show error message ', async () => {
        render(
            <BrowserRouter>
                <UserAuthentication setAutenticated={setAutenticated}/>
            </BrowserRouter>
            );

            const buttonSubmit = screen.getByRole('button', {name: /entrar/i});

            fireEvent.click(buttonSubmit);

            await waitFor(() => {
                expect(screen.getByText('Usuário inválido!')).toBeVisible();
            });

    });

    it('should type into user fields submit form ', async () => {
        render(
            <BrowserRouter>
                <UserAuthentication setAutenticated={setAutenticated}/>
            </BrowserRouter>
        );

        const inputUser = screen.getByPlaceholderText('User name');
        const button = screen.getByRole('button', {name: /entrar/i});

        await userEvent.type(inputUser, 'Ivo Ryan');
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.queryByText('Usuário inválido!')).not.toBeInTheDocument();
        });

        expect(inputUser).toHaveValue('Ivo Ryan');

    });

    it('should call the setAuthentication function when click in paragraph ', async () => {
        render(
            <BrowserRouter>
                <UserAuthentication setAutenticated={setAutenticated}/>
            </BrowserRouter>
        );

        const paragraph = screen.getByText(/Não sou cadastrado!/i);

        fireEvent.click(paragraph);

        expect(setAutenticated).toHaveBeenCalledWith(false);

    });

    it('should navigate in page dashboard when a user valid is found ', async () => {

        const mockUserData = [
            {user: 'ivoRyan15'}
        ];

        (axios.get as vi.Mock).mockResolvedValueOnce({ data: mockUserData });

        render(
            <BrowserRouter>
                <UserAuthentication setAutenticated={setAutenticated}/>
            </BrowserRouter>
        );

        
        const inputUser = screen.getByPlaceholderText('User name');
        const button = screen.getByRole('button', {name: /entrar/i});

        await userEvent.type(inputUser, 'ivoRyan15');
        fireEvent.click(button);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('https://movie-api-cwkr.onrender.com/user');
        });

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledTimes(1);
            expect(mockNavigate).toHaveBeenCalledWith('/dashboard', {
                state: {userName: 'ivoRyan15' },
            });
        });

    })
});