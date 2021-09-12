import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createBook, deleteBook, listBooks } from '../actions/bookActions';
import { BOOK_CREATE_RESET, BOOK_DELETE_RESET } from '../constants/bookConstants';

export default function BookListScreen(props) {
    const bookList = useSelector((state) => state.bookList);
    const {books } = bookList;
    const bookCreate = useSelector((state) => state.bookCreate);
  const {
    book: createdBook,
  } = bookCreate;
  const bookDelete = useSelector((state) => state.bookDelete);
  const {
    
    success: successDelete,
  } = bookDelete;
    const dispatch = useDispatch();
    useEffect(() => {
        if (createdBook) {
            dispatch({ type: BOOK_CREATE_RESET });
            props.history.push(`/book/${createdBook._id}/edit`);
          }
          if (successDelete) {
            dispatch({ type:  BOOK_DELETE_RESET });
          }
      dispatch(listBooks());
    }, [createdBook, dispatch, props.history,successDelete]);
    const deleteHandler = (book) => {
      /// TODO: dispatch delete action
      if (window.confirm('Are you sure to delete?')) {
        dispatch(deleteBook(book._id));
      }
    };
    const createHandler = () => {
        dispatch(createBook());
      };
    return (
        <div>
            <div className="row">
            <h1>Books</h1>
            <button type="button" className="small" onClick={createHandler}>
          Add Book
            </button>


            </div>
        
        
          <table className="books-list">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AUTHOR</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {books&&books.map((book) => (
                <tr key={book._id}>
                  <td>{book._id}</td>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/book/${book._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(book)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
    )
}
