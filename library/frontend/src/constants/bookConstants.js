/*You use those constants in redux at least twice: in your reducers and when creating actions. As a result, defining a constant once in a file 
is much more convenient. I defined constants to fetch book list from the backend in this file. Constants will be used in bookReducer and bookAction file */
export const BOOK_LIST_REQUEST = 'BOOK_LIST_REQUEST';//send a request
export const BOOK_LIST_SUCCESS = 'BOOK_LIST_SUCCESS';//if successfully complated
export const BOOK_LIST_FAIL = 'BOOK_LIST_FAIL';//if there is an error
