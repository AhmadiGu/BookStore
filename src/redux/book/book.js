import { createAsyncThunk } from '@reduxjs/toolkit';
import { postData, getData, removeData } from '../../components/services/service';

const GET_BOOK = 'BookStore/book/GET_BOOK';
const REMOVE_BOOK = 'BookStore/book/REMOVE_BOOK';
const POST_BOOK = 'BookStore/book/POST_BOOK';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${POST_BOOK}/fulfilled`:
      return {
        ...state,
        books: [...state.books, action.payload],

      };

    case `${GET_BOOK}/fulfilled`:
      return {
        ...state,
        books: action.payload,
      };

    case `${REMOVE_BOOK}/fulfilled`:
      return {
        ...state,
        books: state.books.filter((book) => book.itemId !== action.payload),
      };

    default:
      return state;
  }
};

export const postBook = createAsyncThunk(POST_BOOK, async (book) => {
  const bookObj = {
    ...book,
    itemId: Date.now(),
  };
  await postData(bookObj);
  return bookObj;
});

export const getBooks = createAsyncThunk(GET_BOOK, async () => {
  const books = [];
  const data = await getData();
  Object.keys(data).forEach((id) => {
    books.push({
      itemId: id,
      ...data[id][0],
    });
  });
  return books;
});
export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  removeData(id);
  return id;
});
export default bookReducer;
