import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { UseMoviesApi } from './useMoviesApi';

const mockData = [
    {
        id: '1',
        name: 'movie',
        banner_small: 'image.jpg',
        description: 'lorem ipson',
        banner_large: 'image2.jpg',
        duracao: '1:12:00',
        lancamento: '2022',
        nota: '9.0',
        url: 'https://video1.com'
    }
];

vi.mock('axios', () => {
    return{
       default:{
         get: vi.fn().mockImplementation(() => Promise.resolve({data: mockData}))
       }
    }
});

vi.mock('react-router', () => ({
    useParams: () => ({name: 'movie'})
}));

describe('<UseMovie/>', () => {

    afterEach(() => {
        vi.clearAllMocks
    });

    it('should fetch and filter the movies for name of movie on route parameter', async () => {
        const { result } = renderHook(() => UseMoviesApi());

        expect(result.current.movie).toEqual([]);

        await waitFor(() => {
            expect(result.current.movie).toEqual([
                {
                    id: '1',
                    name: 'movie',
                    banner_small: 'image.jpg',
                    description: 'lorem ipson',
                    banner_large: 'image2.jpg',
                    duracao: '1:12:00',
                    lancamento: '2022',
                    nota: '9.0',
                    url: 'https://video1.com'
                }
            ]);
        });

        expect(axios.get).toHaveBeenCalledWith('https://movie-api-cwkr.onrender.com/filmes');

    });
});