import './App.css';
import {BrowserRouter,Link,Route} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import BookListScreen from './screens/BookListScreen';
import BookEditScreen from './screens/BookEditScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';

function App() {
  const userSignin=useSelector((state)=>state.userSignin);
  const {userInfo}=userSignin;
  const dispatch=useDispatch();
  
  const signoutHandler=()=>{
    dispatch(signout());
    
  }
 
  
  return (
    <BrowserRouter>
    <div className="App">
       <div className="grid-container">
      <header className="row">
      <Link className="brand" to="/books">
              library
            </Link>
        <div>
         
        </div>
        <div>
          {
            userInfo?(
            <div className="dropdown"> 
                 <Link to="#">
                   {userInfo.name} <i className="fa fa-caret-down"></i>{""}
                  </Link>
                  <ul className="dropdown-content">
                  <li>
                    <Link to="/books">Book List</Link>
                  </li>
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/logout" onClick={signoutHandler}>
                    Sign Out
                    </Link>
                    </li>
                  </ul>

              </div>
             
            ):
            (
              <div> </div>
            )
            

          }
          {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                 
                  <li>
                    <Link to="/booklist">Books</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
         
         
        </div>
      </header>
      <main>
         {/*Routes navigate users to certain pages of the sites, i used react router dom to define them
              */}
                        <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
                        <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>

              <Route
            path="/book/:id/edit"
            component={BookEditScreen}
            exact
          ></Route>
             <AdminRoute path="/bookList" component={BookListScreen}></AdminRoute>
         <Route path="/logout" component={SigninScreen} ></Route>
        <Route path="/register" component={RegisterScreen} ></Route>
        <Route path="/confirm" component={ConfirmScreen} ></Route>
        
        <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
        <PrivateRoute path="/books" component={HomeScreen}></PrivateRoute>
        <Route path="/" component={SigninScreen} exact></Route>
       

       

        
      </main>
      
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
