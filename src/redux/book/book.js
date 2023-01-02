const ADD_BOOK = 'BookStore/book/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/book/REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book !== action.payload),
      };

    default:
      return state;
  }
};
export default bookReducer;
