import { render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import { Form } from '.';

describe("<Form/>", () => {
    it('should render in the document', async () => {
        render(<Form/>);

        const input = screen.getAllByRole('textbox');
    })
})