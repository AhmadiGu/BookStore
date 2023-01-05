import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/book/book';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setBookName] = useState('');
  const [author, setAutherName] = useState('');
  const [id, setBookId] = useState('');
  const [category, setCategory] = useState('');

  const prevDefault = (e) => {
    e.preventDefault();
    setBookName('');
    setAutherName('');
    setBookId(Date.now());
  };

  return (
    <div>
      <h2 className="form-title"> ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={(e) => prevDefault(e)}>
        <input
          className="form-item add-title"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          className="form-item add-author"
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAutherName(e.target.value)}
        />
        <select
          className="form-item add-category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option className="disable">Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          type="button"
          className="add-btn"
          onClick={() => dispatch(addBook(id, title, author, category))}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
