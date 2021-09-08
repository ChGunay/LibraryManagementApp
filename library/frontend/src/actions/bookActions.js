import Axios from 'axios';
import {
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
} from '../constants/bookConstants';
//This file is to fetch book list from backend, it defines its action

export const listBooks = () => async (dispatch) => {
  dispatch({
      //dispatch(sevk etmek) basically sends the request
    type: BOOK_LIST_REQUEST,//to use dispatch function we need type and type is constants i writed before
  });
  try {
      //if ajax request is successfull payload equals to data
    const { data } = await Axios.get('/api/books');

    dispatch({ type: BOOK_LIST_SUCCESS, payload: data });//using dispatch function where payload is the data i fetched
  } catch (error) {
    dispatch({ type: BOOK_LIST_FAIL, payload: error.message });//error handling
  }
};
//to use this action i will create a books reducer