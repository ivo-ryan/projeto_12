import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { UserAuthentication } from '.';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

const setAutenticated = vi.fn();

vi.spyOn(axios, "get").mockResolvedValueOnce({
    data: [{ user: 'ivoRyan15' }]
  });

const mockNavigate = vi.fn();

vi.mock(import("react-router-dom"), async (importOriginal) => {
    const actual = await importOriginal()
    return {
      ...actual,
      useNavigate: () => mockNavigate,
    }
  })

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
   
    render(
        <BrowserRouter>
          <UserAuthentication setAutenticated={setAutenticated} />
        </BrowserRouter>
      );
  
      const inputUser = screen.getByPlaceholderText('User name');
      const button = screen.getByRole('button', { name: /entrar/i });
  
      await userEvent.type(inputUser, 'ivoRyan15');
      fireEvent.click(button);

      await waitFor(() => {
        expect(axios.get).toHaveBeenCalledWith('https://movie-api-cwkr.onrender.com/user');
      });
  
      await waitFor(() => {
        
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard', {
          state: { userName: 'ivoRyan15' },
        });
      });
    });
});