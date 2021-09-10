import './App.css';
import {BrowserRouter,Link,Route} from "react-router-dom";
import ProfileScreen from './screens/ProfileScreen';

import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ConfirmScreen from './screens/ConfirmScreen';

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
         
         
        </div>
      </header>
      <main>
         {/*Routes navigate users to certain pages of the sites, i used react router dom to define them
              */}
        <Route path="/books" component={HomeScreen}></Route>
        <Route path="/" component={SigninScreen} exact></Route>
        <Route path="/logout" component={SigninScreen} ></Route>
        <Route path="/register" component={RegisterScreen} ></Route>
        <Route path="/confirm" component={ConfirmScreen} ></Route>
        <Route path="/profile" component={ProfileScreen}></Route>

       

        
      </main>
      
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
