import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './components/pages/Books';
import Navbar from './components/Navbar';
import Categories from './components/pages/Category';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(<Books />)}
        />
        <Route
          path="/book-store/category"
          element={(<Categories />)}
        />

      </Routes>

    </div>
  );
}

export default App;
