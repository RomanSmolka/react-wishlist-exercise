import React, { useContext } from 'react';

import IBook from '../../shared/model/Book';
import { WishlistContext, WishlistContextType } from '../../shared/context/wishlist';
import './BookItem.scss';

interface IProps {
    book: IBook;
}

const BookItem = ({ book }: IProps) => {
    const { saveBook } = useContext(WishlistContext) as WishlistContextType;
    return (
            <>
                <article className="book-item">
                    <div className="book-item__top">
                        <div className="book-item__image">
                            <img src={ book.volumeInfo.imageLinks?.smallThumbnail } alt="" />
                            { 
                                book.volumeInfo.imageLinks ? 
                                    null : 
                                    <div className="book-item__image-placeholder">No image available</div> 
                            }
                        </div>
                        <div className="book-item__info">
                            <h2 
                                className="book-item__title"
                                title={ book.volumeInfo.title }
                            >
                                { book.volumeInfo.title }
                            </h2>
                            <div className="book-item__meta">
                                <p>
                                    <span>Authors: </span>
                                    { book.volumeInfo.authors?.join(', ') ?? 'N/A' }
                                </p>
                                <p>
                                    <span>Publisher: </span>
                                    { book.volumeInfo.publisher ?? 'N/A' }
                                </p>
                                <p>
                                    <span>Published: </span>
                                    { book.volumeInfo.publishedDate ?? 'N/A' }
                                </p>
                            </div>
                        </div>
                        <button 
                            className="book-item__heart clickable"
                            title="Add to wishlist"
                            onClick={() => saveBook({ id: book.id, title: book.volumeInfo.title }) }
                        >
                            <svg className="icon icon--20">
                                <use href="#icon-heart"></use>
                            </svg>
                        </button>
                    </div>
                    <p className="book-item__desc">
                        { book.volumeInfo.description }
                    </p>
                </article>
            </>
    );
};

export default BookItem;
