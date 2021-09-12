/*You use those constants in redux at least twice: in your reducers and when creating actions. As a result, defining a constant once in a file 
is much more convenient. I defined constants to fetch book list from the backend in this file. Constants will be used in bookReducer and bookAction file */
export const BOOK_LIST_REQUEST = 'BOOK_LIST_REQUEST';//send a request
export const BOOK_LIST_SUCCESS = 'BOOK_LIST_SUCCESS';//if successfully complated
export const BOOK_LIST_FAIL = 'BOOK_LIST_FAIL';//if there is an error

export const BOOK_CREATE_REQUEST = 'BOOK_CREATE_REQUEST';
export const BOOK_CREATE_SUCCESS = 'BOOK_CREATE_SUCCESS';
export const BOOK_CREATE_FAIL = 'BOOK_CREATE_FAIL';
export const BOOK_CREATE_RESET = 'BOOK_CREATE_RESET';

export const BOOK_UPDATE_REQUEST = 'BOOK_UPDATE_REQUEST';
export const BOOK_UPDATE_SUCCESS = 'BOOK_UPDATE_SUCCESS';
export const BOOK_UPDATE_FAIL = 'BOOK_UPDATE_FAIL';
export const BOOK_UPDATE_RESET = 'BOOK_UPDATE_RESET';

export const BOOK_DELETE_REQUEST = 'BOOK_DELETE_REQUEST';
export const BOOK_DELETE_SUCCESS = 'BOOK_DELETE_SUCCESS';
export const BOOK_DELETE_FAIL = 'BOOK_DELETE_FAIL';
export const BOOK_DELETE_RESET = 'BOOK_DELETE_RESET';