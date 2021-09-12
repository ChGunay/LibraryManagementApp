const {
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_LIST_FAIL,
    BOOK_CREATE_REQUEST,
    BOOK_CREATE_SUCCESS,
    BOOK_CREATE_FAIL,
    BOOK_CREATE_RESET,
    BOOK_UPDATE_REQUEST,
    BOOK_UPDATE_SUCCESS,
    BOOK_UPDATE_FAIL,
    BOOK_UPDATE_RESET,
    BOOK_DELETE_REQUEST,
    BOOK_DELETE_SUCCESS,
    BOOK_DELETE_FAIL,
    BOOK_DELETE_RESET,
  } = require('../constants/bookConstants');
  
  
  export const bookListReducer = (
    state = {loading:true,books: [] },//default state 
    action 
  ) => {
    switch (action.type) {//action.type is the value in bookActions dispatch function
      case BOOK_LIST_REQUEST://using constants
        return { loading: true };
      case BOOK_LIST_SUCCESS://returns the payloads
        return { loading: false, books: action.payload };//data
      case BOOK_LIST_FAIL:
        return { loading: false, error: action.payload };//error message
      default:
        return state;
    }
  };
  export const bookCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case BOOK_CREATE_REQUEST:
        return { loading: true };
      case BOOK_CREATE_SUCCESS:
        return { loading: false, success: true, book: action.payload };
      case BOOK_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case BOOK_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const bookUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case BOOK_UPDATE_REQUEST:
        return { loading: true };
      case BOOK_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case BOOK_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case BOOK_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const bookDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case BOOK_DELETE_REQUEST:
        return { loading: true };
      case BOOK_DELETE_SUCCESS:
        return { loading: false, success: true };
      case BOOK_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case BOOK_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };