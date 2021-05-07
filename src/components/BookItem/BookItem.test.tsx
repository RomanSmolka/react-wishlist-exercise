import React from 'react';
import { render, screen } from '@testing-library/react';

import BookItem from './BookItem';
import { WishlistContext } from '../../shared/context/wishlist';
import context from '../../shared/context/sampleWishlistContext';

describe('Testing BookItem component', () => {
    it('should render book', () => {
        const book = {
            id: "abcd",
            volumeInfo: {
                title: "BookTitle"
            }
        };
        render(
            <WishlistContext.Provider value={context}>
                <BookItem book={book} />
            </WishlistContext.Provider>
        );
        expect(screen.getByText('BookTitle')).toBeInTheDocument();
    });
});
