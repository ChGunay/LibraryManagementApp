const {
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_LIST_FAIL,
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