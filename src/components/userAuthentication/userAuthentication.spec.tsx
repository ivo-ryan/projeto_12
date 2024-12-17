import { render, screen } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';
import { UserAuthentication } from '.';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const setAutenticated = vitest.fn();

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
    })
});