import './App.css';
import {BrowserRouter,Route} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">library</a>
        </div>
        <div>
          <a href="/profile">Profile</a>
          <a href="/signin">Sign Out</a>
        </div>
      </header>
      <main>
         {/*Routes navigate users to certain pages of the sites, i used react router dom to define them
              */}
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
