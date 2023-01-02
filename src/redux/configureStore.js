import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './book/book';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});
export default store;
