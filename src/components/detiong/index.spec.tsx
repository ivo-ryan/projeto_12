import { describe, it , expect, vi, afterEach  } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Detiong } from '.';
import { BrowserRouter } from 'react-router-dom';

const mockMovies = [
  {id: "1" ,name: "Movie 1", banner_large: 'image1.jpg'},
  {id: "2", name: "Movie 2", banner_large: 'image2.jpg'}
];

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await import("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ state: { userName: 'TestUser' } }),
  };
});


afterEach(() => {
  vi.clearAllMocks();
});

describe('<Detiong/>', () => {

    it('should render all components in screen', () => {

        const { container } = render(
            <BrowserRouter>
              <Detiong/>
            </BrowserRouter>  
          );

        const containerImg = container.querySelector('.container-img');
        const spanContainer = container.querySelector('.span-container');

        expect(containerImg).toBeVisible();
        expect(spanContainer).toBeVisible();

    });

    it('should display movies correctly when data is provided', () => {

        vi.mock('../UseApi/useApi', () => ({
            UseApi: () => ({movies: mockMovies})
        }));

        render(
            <BrowserRouter>
              <Detiong />
            </BrowserRouter>  
          );

        const titleMovieName = screen.getByText(/movie 1/i);
        const image = screen.getByAltText(/Slide 0/i);
        const image2 = screen.getByAltText(/slide 1/i);

        expect(titleMovieName).toBeVisible();
        expect(image).toHaveAttribute('src', 'image1.jpg');
        expect(image2).toHaveAttribute('src', 'image2.jpg');

    });

    it('should navigate to the page correct when Play is clicked', async () => {

        vi.mock('../UseApi/useApi', () => ({
          UseApi: () =>({movies: mockMovies})
        }));

        render(
          <BrowserRouter>
            <Detiong/>
          </BrowserRouter>
         );

        const button = screen.getByText('Play');

        fireEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/Movie 1',{
          state: { userName: 'TestUser' }
        });
        expect(button).toBeVisible();
    });

    it('should automatically switch slides at the correctly interval', async () => {
      vi.mock('../UseApi/useApi', () => ({
        UseApi: () => ({movies: mockMovies})
      }));

      render(
        <BrowserRouter>
          <Detiong/>
        </BrowserRouter>
      );

      const slide1 = screen.getByAltText('Slide 0');
      const slide2 = screen.getByAltText('Slide 1');

      expect(slide1).toHaveClass('active');
      expect(slide2).not.toHaveClass('active');

      await waitFor(() => {
        expect(slide1).not.toHaveClass('active');
        expect(slide2).toHaveClass('active');
      },{timeout: 3000})

    });

    it('should clear the interval when the component is unmounted', async () => {
      const clearInterval = vi.spyOn(window, 'clearInterval');

      const { unmount } = render(
        <BrowserRouter>
          <Detiong/>
        </BrowserRouter>
      );

      unmount();

      expect(clearInterval).toBeCalledTimes(1);

    });
        
})