import React from 'react';
import './App.css';
import Signin from './components/SignIn';
import Signup from './components/SignUp';
import Main from './components/Main';
import ManagementUser from './components/ManagementUser';
import Mypage from './components/Mypage';
import Signout from './components/SignOut';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="black-nav">
          <div className="nav-outer-menu">
            {sessionStorage.getItem("id") === null && <Link to="/signup"><div className="nav-inner-right nav-inner-menu">Sign-up</div></Link> }
            {sessionStorage.getItem("id") !== null && <Link to="/signout"><div className="nav-inner-right nav-inner-menu">Log-out</div></Link> }
            {sessionStorage.getItem("id") === null && <Link to="/signin"><div className="nav-inner-right nav-inner-menu">Log-in</div> </Link>}
            {sessionStorage.getItem("id") === "admin" && <Link to="/manageuser"><div className="nav-inner-right nav-inner-menu">Management User</div> </Link>}
            {sessionStorage.getItem("id") !== null && <Link to="/mypage"><div className="nav-inner-right nav-inner-menu">My Page</div> </Link>}
          </div>
          <Link to="/"><div className="nav-inner-left nav-inner-title">Shopping Mall</div></Link>
        </div>

        <div className="screen">
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/manageuser" component={ManagementUser} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/signout" component={Signout} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
