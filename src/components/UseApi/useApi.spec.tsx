import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { renderHook, waitFor } from '@testing-library/react';
import { UseApi } from './useApi';
import axios from 'axios';

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
        __esModule: true,
        default: {
            get: vi.fn().mockImplementation(() => Promise.resolve({data: mockData}))
        }
    };
});


describe('<UseApi/>', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should fetch the movies correctly', async () => {

        const { result } = renderHook(() => UseApi());

        expect(result.current.movies).toEqual([]);

        await waitFor(() => {
            expect(result.current.movies).toEqual([
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

    it('should show the component of loader when movies it is empty and to hide when it is not empty', async () => {
        const { result } = renderHook(() => UseApi());

        expect(result.current.movies).toEqual([]);

        expect(result.current.isLoading).toBe(true);

        await waitFor(() => {
            expect(result.current.movies).toEqual([
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
});