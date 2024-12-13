import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Form } from '.';
import '@testing-library/jest-dom';

describe("<Form/>", () => {
    it('should render in the document', async () => {
        render(<Form/>);

        const inputUser = screen.getAllByRole('textbox', {name: 'user'});
        const inputEmail = screen.getByRole('texbox', {name: 'email'});

        expect(inputUser).toBeVisible();
        expect(inputEmail).toBeVisible();
    });
});