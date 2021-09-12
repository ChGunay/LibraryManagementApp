import Axios from 'axios';
import {
  BOOK_CREATE_FAIL,
  BOOK_CREATE_REQUEST,
  BOOK_CREATE_SUCCESS,
  BOOK_DELETE_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_UPDATE_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
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

export const createBook = () => async (dispatch, getState) => {
  dispatch({ type: BOOK_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/api/books',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: BOOK_CREATE_SUCCESS,
      payload: data.book,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BOOK_CREATE_FAIL, payload: message });
  }
};
export const updateBook = (book) => async (dispatch, getState) => {
  dispatch({ type: BOOK_UPDATE_REQUEST, payload: book });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/books/${book._id}`, book, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BOOK_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BOOK_UPDATE_FAIL, error: message });
  }
};
export const deleteBook = (bookId) => async (dispatch, getState) => {
  dispatch({ type: BOOK_DELETE_REQUEST, payload: bookId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/books/${bookId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BOOK_DELETE_SUCCESS, payload:data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BOOK_DELETE_FAIL, payload: message });
  }
};
//to use this action i will create a books reducer