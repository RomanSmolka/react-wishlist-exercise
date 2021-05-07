import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


describe('Testing App', () => {
    it('should render search section', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/Try searching for a topic/i);
        expect(linkElement).toBeInTheDocument();
    });
    it('should render wishlist section', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText(/My Reading Wishlist/i);
        expect(linkElement).toBeInTheDocument();
    });
});
