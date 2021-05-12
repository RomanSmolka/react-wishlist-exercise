import React, { useEffect, useState } from 'react';

import BookItem from '../BookItem/BookItem';
import IBook from '../../shared/model/Book';
import { getBooksByType } from './book-search.service';
import debounce from '../../shared/debouncer/debouncer';
import './BookSearch.scss';

const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    
    const [totalBooksFound, updateTotalBooksFound] = useState(0);
    const [booksList, updateBooksList] = useState([]);
    
    const debouncedBookType = debounce(bookType, 500)

    async function requestBooks() {
        if (debouncedBookType) {
            const response = await getBooksByType(debouncedBookType);
            updateTotalBooksFound(response.totalItems);
            updateBooksList(response.items);
        } else {
            updateTotalBooksFound(0);
            updateBooksList([]);
        }
    }

    useEffect(() => {
        async function getAllBooks() {
            await requestBooks();
        }
        getAllBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedBookType]);

    return (
            <>
                <div className="book-search">
                    <input
                        className="full-width"
                        autoFocus
                        name="gsearch"
                        type="search"
                        value={bookType}
                        placeholder="Search for books"
                        onChange={e => updateBookType(e.target.value)}
                    />

                    <p>Total books found: { totalBooksFound }</p>

                    {!bookType && (
                        <div className="empty">
                            <p>
                                Try searching for a topic, for example
                                {" "}
                                "<a href="#!" onClick={() => {
                                        updateBookType("Javascript");
                                    }}
                                >
                                    Javascript
                                </a>"
                            </p>
                        </div>
                    )}
                </div>

                <div className="books">
                    {
                        bookType && (booksList.map(( item: IBook, index: number ) => (
                            <BookItem book={item} key={item.id}/>
                        )))
                    }
                    <article className="book-item"></article>
                    <article className="book-item"></article>
                </div>
            </>
    );
};

export default BookSearch;
