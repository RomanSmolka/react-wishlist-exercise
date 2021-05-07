import React from 'react';
import { render, screen } from '@testing-library/react';

import Wishlist from './Wishlist';
import { WishlistContext } from '../../shared/context/wishlist';
import context from '../../shared/context/sampleWishlistContext';

describe('Testing Wishlist component', () => {
    it('should list saved books from context', () => {
        render(
            <WishlistContext.Provider value={context}>
                <Wishlist />
            </WishlistContext.Provider>
        );
        expect(screen.getByText('BookTitle')).toBeInTheDocument();
    });
});
