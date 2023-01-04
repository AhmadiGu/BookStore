import React from 'react';

import { useSelector } from 'react-redux';
import Book from '../Book';
import AddBook from '../AddBook';

const Books = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      {
          books.map((book) => (
            <div key={book.id} className="container">
              <Book book={book} />
            </div>
          ))
        }
      <div className="diveder-form" />
      <div className="add-book">
        <AddBook />
      </div>
    </>
  );
};
export default Books;
