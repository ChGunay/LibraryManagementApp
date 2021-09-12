import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUser } from '../actions/userActions';

import { USER_UPDATE_RESET } from '../constants/userConstants';

export default function UserEditScreen(props) {
  
  
  const userId = props.match.params.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isVertified, setIsVertified] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    
    success: successUpdate,
  } = userUpdate;
  
  

  const dispatch = useDispatch();
  useEffect(() => {
    
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push('/userlist');
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsVertified(user.isVertified);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, name, email, isVertified, isAdmin }));
  };
  return (
    
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit User {name}</h1>
        </div>
        
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="isVertified">Vertify</label>
              <input
                id="isVertified"
                type="checkbox"
                checked={isVertified}
                onChange={(e) => setIsVertified(e.target.checked)}
              ></input>
            </div>
            <div>
              <label htmlFor="isAdmin">Make Admin</label>
              <input
                id="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
            </div>
            <div>
              <button type="submit" className="small">
                Update
              </button>
            </div>
         
        
      </form>
    </div>
  );
}