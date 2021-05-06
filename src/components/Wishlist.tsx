import React, { useContext } from 'react';

import { WishlistContext, WishlistContextType } from './context/wishlist';
import IWishListItem from './model/WishlistItem';
import './Wishlist.scss';

const Wishlist = () => {
    const { wishlist, deleteBook } = useContext(WishlistContext) as WishlistContextType;
    return (
        <div className="wishlist">
            <h2>My Reading Wishlist ({ wishlist.length })</h2>
            <ul>
                { wishlist.map((item: IWishListItem, index: number) => (
                    <li key={index}>
                        { item.title } 
                        <button 
                            title="Remove from wishlist"
                            onClick={ () => deleteBook(item.id) }
                        >
                            <svg className="icon icon--10">
                                <use href="#icon-close"></use>
                            </svg>
                        </button>
                    </li>
                )) }
            </ul>
            { wishlist.length ? "" : 
                <p>You don't have anything on your wishlist.<br></br><br></br> Search for a book and click on the heart symbol to add it.</p> 
            }
        </div>
    );
};

export default Wishlist;
