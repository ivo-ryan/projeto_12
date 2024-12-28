import { describe, it , expect, vi  } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Detiong } from '.';
import { BrowserRouter } from 'react-router-dom';


describe('<Detiong/>', () => {

    it('should render all components in screen', () => {
        render(
          <BrowserRouter>
            <Detiong/>
          </BrowserRouter>  
        );

        const { container } = render(
            <BrowserRouter>
              <Detiong/>
            </BrowserRouter>  
          );

        const containerImg = container.querySelector('container-img');
        const spanContainer = container.querySelector('span-container');
        const button = screen.getByRole('button', {name: /play/i});

        expect(containerImg).toBeVisible();
        expect(spanContainer).toBeVisible();
        expect(button).toBeVisible();

    });

    it('should display movies correctly when data is provided', () => {
        const mockMovies = [
            {name: "Movie 1", banner_large: 'image1.jpg'},
            {name: "Movie 2", banner_large: 'image2.jpg'}
        ];

        vi.mock('../UseApi/useApi', () => ({
            UseApi: () => ({movies: mockMovies})
        }));

        render(
            <BrowserRouter>
              <Detiong/>
            </BrowserRouter>  
          );

        const titleMovieName = screen.getByText(/movie 1/i);
        const image = screen.getByAltText(/slide 1/i);

        expect(titleMovieName).toBeVisible();
        expect(image).toHaveAttribute('scr', 'image1.jpg');

    });

        
})