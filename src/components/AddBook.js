import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/book/book';

// import { postData } from './services/service';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const prevDefault = (e) => {
    e.preventDefault();
    setBook(() => ({
      title: '',
      author: '',
    }));
  };

  const handleBook = (e) => {
    const { name, value } = e.target;
    setBook((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="form-title"> ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={(e) => prevDefault(e)}>
        <input
          className="form-item add-title"
          type="text"
          placeholder="Book title"
          name="title"
          value={book.title}
          onChange={handleBook}

        />

        <input
          className="form-item add-author"
          type="text"
          placeholder="Book author"
          name="author"
          value={book.author}
          onChange={handleBook}
        />
        <select
          className="form-item add-category"
          name="category"
          value={book.category}
          onChange={handleBook}
        >
          <option className="disable">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          type="submit"
          className="add-btn"
          onClick={() => dispatch(postBook(book))}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
