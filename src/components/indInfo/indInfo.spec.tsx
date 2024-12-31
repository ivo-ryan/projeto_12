import { expect, describe, it, vi, afterEach } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IndInfo } from '.';

const mockNavigate = vi.fn();

const movie = [
    {
        name: 'movie1',
        banner_large: 'image.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio error iste, debitis dicta fugiat deleniti alias dolorum doloribus? Iure id, officia dolore ea facilis repellendus architecto quos maiores tenetur magni.',
        lancamento: '2022',
        duracao: '1:05:54',
        nota: '9.0'
    }
];

vi.mock('react-router', () => ({
    useLocation: () => ({ state: { userName: 'teste15' } }),
    useParams: () => ({ name: 'movie' }),
    useNavigate: () => mockNavigate,
}));

afterEach(() => {
    vi.clearAllMocks();
});

describe('<IndInfo/>', () => {
    it('should render components in screen', () => {
        render(
            <BrowserRouter>
                <IndInfo/>
            </BrowserRouter>
        );

      
        const sinopse = screen.getByText(/sinopse:/i);
        const year = screen.getByText( /ano:/i);
        const duration = screen.getByText( /duração:/i);
        const button = screen.getByText(/play/i);

        expect(sinopse).toBeVisible();
        expect(year).toBeVisible();
        expect(duration).toBeVisible();
        expect(button).toBeVisible();
        
    });

    it('should show the data correctly', () => {
        vi.mock('./useMoviesApi', () => ({
            UseMoviesApi: () => ({movie: movie}) 
         }));
 
         render(
             <BrowserRouter>
                 <IndInfo/>
             </BrowserRouter>
         );

        const title = screen.getByRole('heading' , {name: /movie1/i});
        const image = screen.getByAltText(/movie1/i);
        const score = screen.getByText('9.0');
        const sinopse = screen.getByText(/Lorem ipsum /i);
        const year = screen.getByText( /2022/i);
        const duration = screen.getByText( /1:05:54/i);

        expect(title).toBeVisible();
        expect(image).toBeVisible();
        expect(image).toHaveAttribute('src', 'image.jpg');
        expect(score).toBeVisible();
        expect(sinopse).toBeVisible();
        expect(year).toBeVisible();
        expect(duration).toBeVisible();
      
    });

    it('should navigate to page correct', () => {
        vi.mock('./useMoviesApi', () => ({
            UseMoviesApi: () => ({movie: movie}) 
         }));
 
         render(
             <BrowserRouter>
                 <IndInfo/>
             </BrowserRouter>
         );

         const button = screen.getByLabelText('button');

         fireEvent.click(button);

         expect(mockNavigate).toHaveBeenCalledWith('/movie1/play', {
            state: {userName: 'teste15'}
         });
         expect(mockNavigate).toHaveBeenCalledTimes(1);
    })
})

