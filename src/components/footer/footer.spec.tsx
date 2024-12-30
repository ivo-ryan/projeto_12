import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from '.';


describe('<Footer/>', () => {
    it('should render the components in screen', () => {
        render(<Footer/>);

        const paragraph = screen.getByText('Ivo Ryan. Todos os direitos reservados.', {exact: false});
        const span = screen.getByText('2024');
        const linkPolicy = screen.getByRole('link', {name: /política de privacidade/i});

        expect(paragraph).toBeVisible();
        expect(span).toBeVisible();
        expect(linkPolicy).toBeVisible();
    })
})