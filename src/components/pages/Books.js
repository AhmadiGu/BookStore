import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../Book';
import AddBook from '../AddBook';

const Books = () => {
  const books = [

    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      currentChapter: 'Chapter 17',
      progress: 64,
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      currentChapter: 'Chapter 3: Lesson Learned',
      progress: 6,
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Action',
      currentChapter: 'Chapter 17',
      progress: 0,
    },
  ];

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
