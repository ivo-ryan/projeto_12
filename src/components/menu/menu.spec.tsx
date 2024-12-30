import { expect, describe, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from '.';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
    const actual = await import('react-router-dom');
    return{
        ...actual,
        useLocation: () => ({state: {userName: 'teste15'}}),
        useNavigate: () =>  mockNavigate,
        useParams: () => ({name: 'Movie 1'})
    };
});


describe('<Menu/>', () => {
    it('should render the compents in screen ', () => {
        render(
            <BrowserRouter>
                <Menu/>
            </BrowserRouter>
        );

        const title = screen.getByText(/movie/i);
        //const nameUser = screen.getByRole('heading', {name: /teste15/i});

        expect(title).toBeVisible();
        // expect(nameUser).toBeVisible();
    });

    it('should navigate page correct when clicked in component', () => {
        render(
            <BrowserRouter>
                <Menu/>
            </BrowserRouter>
        );

        const title = screen.getByLabelText('button');

        fireEvent.click(title);

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/Movie 1', {
            state: {userName: 'teste15'}
        });
    })
});