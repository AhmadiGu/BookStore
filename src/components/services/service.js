import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4hv8UKDlAMDrjK6ry6Gl/books';
// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iqvGBsJ72bLYceNdkDo2/books';

export const postData = async (data = {}) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const getData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const removeData = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
