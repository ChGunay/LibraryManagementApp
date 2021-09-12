import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, listUsers} from '../actions/userActions';
import { USER_DETAILS_RESET } from '../constants/userConstants';


export default function UserListScreen(props) {
  const userList = useSelector((state) => state.userList);
  const { users } = userList;
  const userDelete = useSelector((state) => state.userDelete);

  const {
   
    success: successDelete,
  } = userDelete;
  
  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(listUsers());
    dispatch({
        type: USER_DETAILS_RESET,
      });
}, [dispatch, successDelete]);
const deleteHandler = (user) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(user._id));
    }
  };
 
  return (
    <div>
      
      <div>
      <h1>All Users</h1>
      <h2> Vertified Users</h2>
     
     <table className="books-list">
       <thead>
         <tr>
           <th>ID</th>
           <th>NAME</th>
           <th>EMAIL</th>
           <th>ACTIONS</th>
         </tr>
       </thead>
       <tbody>
           
         {users&&users.map((user) => (
             user.isVertified?(
           <tr key={user._id}>
             <td>{user._id}</td>
             <td>{user.name}</td>
             <td>{user.email}</td>
           
            
             <td>
             <button
                    type="button"
                    className="small"
                    onClick={() => {props.history.push(`/user/${user._id}/edit`);window.location.reload(false)}
                  
                  }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                    Delete
                  </button>
             </td>
           </tr>
           ):(
            <div className="books-list">
              
           
            <tr className="vertify" key={user._id}>
              
            <td className="vertify" >{user._id}</td>
            <td className="vertify">{user.name}</td>
            <td className="vertify">{user.email}</td>
           
            <td>
            <button
                    type="button"
                    className="small"
                    onClick={() => {props.history.push(`/user/${user._id}/edit`);window.location.reload(false)}
                  }
                  >
                    Edit
                  </button>
              <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                    Delete
                  </button>
            </td>
          </tr>
          </div>

           )
         ))}
       </tbody>
     </table>
      </div>
    </div>
    
  );
}