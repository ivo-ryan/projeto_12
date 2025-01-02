import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import axios from 'axios';
import { UseApi } from './useApi';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('react-router', () => ({
    useParams: () => ({name: 'movie'})
}));

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
]

vi.mock('axios', () => {
    return{
        __esModule: true,
        default: {
            get: vi.fn().mockImplementation(() => Promise.resolve({data: mockData}))
        }
    }
})

describe('<UseApi/>', () => {

    it('should fetch and filter movies based on route parameter', async () => {

        const { result } = renderHook(() => UseApi());

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
        
        expect(axios.get).toHaveBeenLastCalledWith('https://movie-api-cwkr.onrender.com/filmes');
    });

    it('should show the component of loader when movies it is empty and to hide when it is not empty', async () => {
        const { result } = renderHook(() => UseApi());

        expect(result.current.movie).toEqual([]);

        expect(result.current.isLoading).toBe(true);

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

        expect(result.current.isLoading).toBe(false);

    });
})