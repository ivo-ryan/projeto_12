import { expect, describe, it , vi } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { VideoPlay } from '.';

const movieMock = [
    {
        name: 'movie1',
        url: 'https://video2.com',
        description: 'Lorem ipsum dolor sit'
    }
    
];

describe('<VideoPlay/>', () => {
    it('should show the data correctly in screen', () => {
        vi.mock('./useApi', () => ({
            UseApi: () => ({movie: movieMock})
        }));


        render(<VideoPlay/>);

        const title = screen.getByRole('heading', {name: /movie1/i});
        const link = screen.getByRole('link');
        const description = screen.getByText('Lorem ipsum dolor sit');

        expect(title).toBeVisible();
        expect(link).toBeVisible();
        expect(description).toBeVisible();
        expect(link).toHaveAttribute('href', 'https://video2.com');

    });
});