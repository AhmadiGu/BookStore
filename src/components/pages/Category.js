import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const stateCategory = useSelector((state) => state.categories.status);
  return (
    <div className="category-page">
      <h2 className="cat-title">
        {' '}
        {stateCategory}
      </h2>
      <button type="button" className="cat-btn" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
