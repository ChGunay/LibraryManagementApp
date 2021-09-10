import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';

export default function RegisterScreen(props) {
    //react hooks(initial values)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const [password, setPassword] = useState('');
  //redirect to home
  //const redirect=props.location.search?props.location.search.split("=")[1]:
  //"/books";
  const redirect2=props.location.search?props.location.search.split("=")[1]:
  "/confirm";
  
  const userRegister=useSelector((state)=>state.userRegister);
  const {userInfo,error}=userRegister;
  const dispatch = useDispatch();//initial dispatch

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name,email,password));//using signin action in useractions
  };
  useEffect(()=>{
    if(userInfo){
      props.history.push(redirect2);
    }
  },[props.history,redirect2,userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1> Register</h1>
        </div>
        {error&&<p>{error}</p>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        
        <div>
          <label />
          <button className="primary" type="submit">
           Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already a member <Link to="/">Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}