import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Form } from '.';
import '@testing-library/jest-dom';

describe("<Form/>", () => {
    it('should render in the document', async () => {
        render(<Form/>);

        const inputUser = screen.getByPlaceholderText(/user/i);
        const inputEmail = screen.getByPlaceholderText(/email/i);

        expect(inputUser).toBeVisible();
        expect(inputEmail).toBeVisible();
    });
});