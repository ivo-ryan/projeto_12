import {  describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
    it('should title render in the document', () => {
        render(<App/>)

        const title = screen.getByText(/olá mundo/i);

        expect(title).toBeInTheDocument();
    })
})