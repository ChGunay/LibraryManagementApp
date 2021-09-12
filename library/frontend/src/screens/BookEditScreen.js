import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';


import { listBooks, updateBook} from '../actions/bookActions';
import { BOOK_UPDATE_RESET } from '../constants/bookConstants';

export default function BookEditScreen(props) {
  const bookId = props.match.params.id;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const {book}=bookList;
  console.log(book);
  
  useEffect(() => {
    if (book) {
        props.history.push('/booklist');
      }
      if (!book || book._id !== bookId ) {
        dispatch({ type: BOOK_UPDATE_RESET });

      dispatch(listBooks(bookId));
    } else {
      setName(book.name); 
      setImage(book.image);
      setAuthor(book.author);
      
    }
  }, [book, dispatch, bookId,props.history]);
  const submitHandler = (e) => {
    
    e.preventDefault();
    // TODO: dispatch update book
    if(name&&image&&author){
    dispatch(
        updateBook({
          _id: bookId,
          name,
          image,
          author, 
        })
      );
      alert("Book Updated Successfully")
      window.location.replace("/booklist");
    
    }else{
      alert("You must fill all the fields")
    }
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit/Add Book</h1>
        </div>
        
          
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={bookList.name}
                
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
           
           
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload}
              {errorUpload && (
                alert("update failed")
              )}
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                id="author"
                type="text"
                placeholder="Enter author"
                value={bookList.author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
           
            <div>
              <label></label>
              <button className="small" type="submit">
                Update/Add
              </button>
            </div>
          
        
      </form>
    </div>
  );
}