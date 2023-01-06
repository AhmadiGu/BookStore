import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/book';

const Book = ({ book }) => {
  const {
    itemId, category, title, author, progress = '0', currentChapter = 'Chapter 1',
  } = book;

  const dispatch = useDispatch();
  return (

    <div className="books">
      <div className="book-info">
        <h3 className="category">{category}</h3>
        <h1 className="title">{title}</h1>
        <h5 className="author">{author}</h5>
        <div className="actions">
          <button type="button" className="btn comment"> Comment</button>
          <div className="btn-divider" />
          <button type="button" className="btn remove" onClick={() => dispatch(removeBook(itemId))}> Remove</button>
          <div className="btn-divider" />
          <button type="button" className="btn edit"> Edit</button>

        </div>
      </div>

      <div className="progress">
        <div className="circle1">
          <div className="circle2" />
        </div>

        <div className="details">
          <p className="precent">
            {' '}
            {progress}
            %
          </p>
          <p className="complete"> Completed</p>
        </div>
        <div className="divider" />
        <div className="chapter">
          <div>
            <p className="current"> CURRENT CHAPTER</p>
            <p className="chapter-p">
              {' '}
              {currentChapter}
            </p>
          </div>
          <button type="button" className="update"> UPDATE PROGRESS</button>
        </div>
      </div>
    </div>

  );
};
export default Book;
