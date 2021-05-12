import React, { useState, createContext } from "react";

import IWishListItem from "../model/WishlistItem";

export type WishlistContextType = {
    wishlist: IWishListItem[];
    sidebarOpen: boolean;
    triggerBook: (todo: IWishListItem) => void;
    saveBook: (todo: IWishListItem) => void;
    deleteBook: (id: string) => void;
    triggerSidebar: () => void;
}

export const WishlistContext = createContext<WishlistContextType | null>(null);

export default ({ children }: any) => {
    const [wishlist, updateWishlist] = useState<IWishListItem[]>([]);
    const [sidebarOpen, updateSidebarOpen] = useState<boolean>(false);

    const triggerBook = (book: IWishListItem) => {
        if ( !wishlist.some(item => item.id === book.id )) {
            saveBook(book);
        } else {
            deleteBook(book.id);
        }
    };

    const saveBook = (book: IWishListItem) => {
        if (!wishlist.some(item => item.id === book.id )) {
            updateWishlist([ ...wishlist, book]);
        }
    };

    const deleteBook = (id: string) => {
        const index = wishlist.findIndex(item => item.id === id);
        if (index > -1) {
            const newWishlist = [ ...wishlist];
            newWishlist.splice(index, 1);
            updateWishlist(newWishlist);
        }
    };

    const triggerSidebar = () => {
        updateSidebarOpen(!sidebarOpen);
    };

    return (
        <WishlistContext.Provider value={{ 
            wishlist, 
            sidebarOpen, 
            saveBook, 
            deleteBook,
            triggerBook,
            triggerSidebar 
        }}>
            {children}
        </WishlistContext.Provider>
    );
};