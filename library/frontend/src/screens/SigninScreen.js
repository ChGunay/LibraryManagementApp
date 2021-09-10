import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';

export default function SigninScreen(props) {
    //react hooks(initial values)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //redirect to home
  const redirect=props.location.search?props.location.search.split("=")[1]:
  "/books";
  
  const userSignin=useSelector((state)=>state.userSignin);
  const {userInfo,error}=userSignin;
  const dispatch = useDispatch();//initial dispatch

  const submitHandler = (e) => {
      //sign in action
    e.preventDefault();
    dispatch(signin(email,password));//using signin action in useractions
  };
  useEffect(()=>{
    if(userInfo){
      props.history.push(redirect);
    }
  },[props.history,redirect,userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {error&&<p>{error}</p>}
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
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            Register to library<Link to="/register"> Create An Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}