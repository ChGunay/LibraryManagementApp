import React, { useEffect } from 'react'
import Book from '../components/Book';
import { useDispatch, useSelector } from 'react-redux';
import { listBooks } from '../actions/bookActions';

export default function HomeScreen() {
 
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const {books}=bookList;
//setting initial value of the arrays before using them to fetch data from backend
//useState is the defining the initial value before using it in useEffect function
  //as an alternative we will use redux store
  
  //const[books,setBooks]=useState([]); //defining the react hook
  //use effect will run when components are rendered, it only runs one time
  //useEffect accepts 2 parameters, function and array, this function sends and ajax request to backend
  //and fetch books that way
  //array is the dependencies
  useEffect(()=>{
    dispatch(listBooks());
  }, [dispatch]);
    //rewrite the function(below is the old version)
    
    //this function fetches data from bckend by sending axios request
    /*const fetchData=async()=>{
      //i defined api in server.js file now i will use it to get books data and sve it in frontend
      const{data}=await axios.get("/api/books");
      setBooks(data);

    };
    fetchData();*/


  
    return (
        <div>
          <div className="row center">
           
            {
              books&&books.map((book)=>(
                <Book key={book._id} book={book}></Book>
                
              ))
            }  
          </div>
      </div>
    );
}
