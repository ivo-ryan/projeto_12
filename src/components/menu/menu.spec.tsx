import { expect, describe, it, vi, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from '.';

const mockNavigate = vi.fn();

vi.mock('react-router', () => ({
    useLocation: () => ({ pathname: '/movie/play', state: { userName: 'teste15' } }),
    useParams: () => ({ name: 'movie' }),
    useNavigate: () => mockNavigate,
}));

afterEach(() => {
    vi.clearAllMocks();
});

describe('<Menu/>', () => {

    it('should render the compents in screen ', () => {
        render(
            <BrowserRouter>
                <Menu/>
            </BrowserRouter>
        );

        const title = screen.getByText(/movie/i);
        const nameUser = screen.getByText('teste15');

        expect(title).toBeVisible();
        expect(nameUser).toBeVisible();
    });

    it('should navigate page correct when clicked in component', () => {
        render(
            <BrowserRouter>
                <Menu/>
            </BrowserRouter>
        );

        const backArrow = screen.getByLabelText('voltar');
        expect(backArrow).toBeVisible();
        fireEvent.click(backArrow);

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/movie', {
            state: {userName: 'teste15'}
        });
    });
});