import React from 'react';

const AddBook = () => (
  <div>
    <h2 className="form-title"> ADD NEW BOOK</h2>
    <form className="add-form">
      <input className="form-item add-title" type="text" placeholder="Book title" />
      <input className="form-item add-author" type="text" placeholder="Book author" />
      <select className="form-item add-category" name="category">
        <option className="disable">Category</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit" className="add-btn">Add Book</button>
    </form>
  </div>
);

export default AddBook;
