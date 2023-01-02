const GATEGORY_STATUS = 'GATEGORY_STATUS';

export const checkStatus = () => ({
  type: GATEGORY_STATUS,
});

const initialState = {
  categories: [],
  status: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GATEGORY_STATUS:
      return {
        categories: [],
        status: 'Under construction',
      };

    default:
      return state;
  }
};
export default categoriesReducer;
