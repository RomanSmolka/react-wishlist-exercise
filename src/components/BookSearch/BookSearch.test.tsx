import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';

import BookSearch from './BookSearch';
import { getBooksByType } from './book-search.service';
import sampleResponse from './sampleJSONResponse.json';
import { WishlistContext } from '../../shared/context/wishlist';
import context from '../../shared/context/sampleWishlistContext';

jest.mock('./book-search.service');

describe('Testing BookSearch component', () => {
    it('should render default text', () => {
        render( <BookSearch /> );
        expect(screen.getByText(/Try searching for a topic, for example/i)).toBeInTheDocument();
    });
    it('should perform search', async () => {
        (getBooksByType as any).mockResolvedValueOnce(sampleResponse);
        render(
            <WishlistContext.Provider value={context}>
                <BookSearch />
            </WishlistContext.Provider>
        );

        const input = screen.getByPlaceholderText('Search for books');
        fireEvent.change(input, { target: { value: "Javascript" } });

        await wait(() => expect(getBooksByType).toHaveBeenCalledTimes(1)) ;
    });
});
