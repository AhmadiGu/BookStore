import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/book-store/category',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header className="header">
      <h1 className="nav-title">Bookstore CMS</h1>
      <ul className="nav-container">
        {
                  links.map((link) => (

                    <li key={link.id} className="nav-link">
                      <NavLink className="active-link" to={link.path}>{link.text}</NavLink>
                    </li>
                  ))
             }

      </ul>
      <button type="button" className="icon-button">
        <span className="material-icons"><BsFillPersonFill /></span>
      </button>
    </header>
  );
};
export default Navbar;
