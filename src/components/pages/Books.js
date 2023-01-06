import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Book';
import AddBook from '../AddBook';
import { getBooks } from '../../redux/book/book';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      {
          books.map((book) => (
            <div key={book.itemId} className="container">
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
