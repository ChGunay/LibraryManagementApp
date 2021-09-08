import React from 'react'

export default function Book(props) {
    //Book component complies in HomeScreen.js and it starts compiling this file, data is already fetched in the
    //HomeScreen.js to use the data from another file React uses props. It fetches the data and uses it in
    const {book}=props;
    return (
        
            <div key={book._id} className="card">
             
             <img
               className="medium"
               src={book.image}
               alt={book._id}
             />
          
           <div className="card-body">
             
               <h1>{book.name}</h1>
               <h4>{book.author}</h4>
           </div>
         </div>  
            
        
    )
}
