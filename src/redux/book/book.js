const ADD_BOOK = 'BookStore/book/ADD_BOOK';
const REMOVE_BOOK = 'BookStore/book/REMOVE_BOOK';

const initialState = {
  books: [

    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      currentChapter: 'Chapter 17',
      progress: 64,
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      currentChapter: 'Chapter 3: Lesson Learned',
      progress: 6,
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Action',
      currentChapter: 'Chapter 17',
      progress: 0,
    },

  ],
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
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};
export const addBook = (id, title, author, category) => ({
  type: ADD_BOOK,
  payload: {
    id, title, author, category,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default bookReducer;
