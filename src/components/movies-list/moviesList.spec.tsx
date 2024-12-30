import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MoviesList } from '.';


const mockMovies = [
    {name: 'movie 1', banner_small: 'image1.jpg', nota: '9.0'},
    {name: 'movie 2', banner_small: 'image2.jpg', nota: '7.0'}
];

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
    const actual = await import("react-router-dom");
    return{
        ...actual,
        useLocation: () => ({ state: { userName: 'teste15' } }),
        useNavigate: () => mockNavigate
    }
});

describe('<MoviesList/>', () => {

    it('should render the title in screen', () => {
        render(
            <BrowserRouter>
                <MoviesList/>
            </BrowserRouter>
        );


        const title = screen.getByText(/movies/i);

        expect(title).toBeVisible();
    });

    it('should display movies correctly when data is provided', async () => {
        vi.mock('../UseApi/useApi', () => ({
            UseApi: () => ({movies: mockMovies})
        }));

        render(
            <BrowserRouter>
                <MoviesList/>
            </BrowserRouter>
        )

        const image1 = screen.getByAltText(/movie 1/i);
        const image2 = screen.getByAltText(/movie 2/i);
        const score1 = screen.getByText('9.0');
        const score2 = screen.getByText('7.0');

        expect(image1).toBeVisible();
        expect(image1).toHaveAttribute('src', 'image1.jpg');
        expect(image2).toBeVisible();
        expect(image2).toHaveAttribute('src', 'image2.jpg');
        expect(score1).toBeVisible();
        expect(score2).toBeVisible();

    });

    it('should navigate to page correct when clicked in component', async () => {
        vi.mock('../UseApi/useApi', () => ({
            UseApi: () => ({movies: mockMovies})
        }));

        render(
            <BrowserRouter>
                <MoviesList/>
            </BrowserRouter>
        )

        const image1 = screen.getByAltText(/movie 1/i);

        fireEvent.click(image1);

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/movie 1', {
            state: { userName: 'teste15' }
        });

    })

})