import React, { useEffect, useState } from 'react';

import BookItem from './BookItem';
import IBook from './model/Book';
import { getBooksByType } from './book-search.service';
import './BookSearch.scss';

const BookSearch = () => {
    const [bookType, updateBookType] = useState("");
    const [bookTypeToSearch, updateBookTypeToSearch] = useState("");

    const [totalBooksFound, updateTotalBooksFound] = useState(0);
    const [booksList, updateBooksList] = useState([]);

    async function requestBooks() {
        if (bookTypeToSearch) {
            const response = await getBooksByType(bookTypeToSearch);
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
    }, [bookTypeToSearch]);

    return (
            <>
                <div className="book-search">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            updateBookTypeToSearch(bookType)
                        }}
                    >
                        <input
                            className="full-width"
                            autoFocus
                            name="gsearch"
                            type="search"
                            value={bookType}
                            placeholder="Search for books"
                            onChange={e => updateBookType(e.target.value)}
                        />
                    </form>

                    <p>Total books found: { totalBooksFound }</p>

                    {!bookType && (
                        <div className="empty">
                            <p>
                                Try searching for a topic, for example
                                <a href="#!" onClick={() => {
                                        updateBookType("Javascript");
                                    }}
                                >
                                    {" "}
                                    "Javascript"
                                </a>
                            </p>
                        </div>
                    )}
                </div>

                <div className="books">
                    {
                        bookType && (booksList.map(( item: IBook, index: number ) => (
                            <BookItem book={item} key={index}/>
                        )))
                    }
                    <article className="book-item"></article>
                    <article className="book-item"></article>
                </div>
            </>
    );
};

export default BookSearch;
