import { expect , describe, it, vi  } from 'vitest'
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Recomends } from '.';
import { fireEvent, render, screen } from '@testing-library/react';

const mockMovies = [
    { name: 'Movie 1', banner_small: 'image1.jpg', nota: '9.0' },
    { name: 'Movie 2', banner_small: 'image2.jpg', nota: '6.0' },
];

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
    const actual = await import('react-router-dom');
    return{
        ...actual,
        useLocation: () => ({state: {userName: 'teste15'}}),
        useNavigate: () => mockNavigate
    }
});

describe('<Recomends', () => {

    it('should render the components en screen', () => {
        render(
            <BrowserRouter>
                <Recomends/>
            </BrowserRouter>
        );

        const title = screen.getByText(/recomendados/i);

        expect(title).toBeVisible();
    });

    it('should render the data correctly in screen', async () => {

        vi.mock('./useMoviesApi', () => ({
            UseMoviesApi: () => ({moviesCurr: mockMovies})
        }));

        render(
            <BrowserRouter>
                <Recomends/>
            </BrowserRouter>
        );

        const image1 = screen.getByAltText(/Movie 1/i);
        const image2 = screen.getByAltText(/Movie 2/i);
        const score1 = screen.getByText('9.0');
        const score2 = screen.getByText('6.0');


        expect(image1).toBeVisible();
        expect(image1).toHaveAttribute('src', 'image1.jpg');
        expect(image2).toBeVisible();
        expect(image2).toHaveAttribute('src', 'image2.jpg');
        expect(score1).toBeVisible();
        expect(score2).toBeVisible();

    });

    it('should navigate to page correct when clicked in component', async () => {
        vi.mock('./useMoviesApi', () => ({
            UseMoviesApi: () => ({moviesCurr: mockMovies})
        }));

        render(
            <BrowserRouter>
                <Recomends/>
            </BrowserRouter>
        );

        const image1 = screen.getByAltText(/Movie 1/i);   

        fireEvent.click(image1);

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/Movie 1', {
            state: {userName: 'teste15'}
        });
    });
})