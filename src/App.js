import React from 'react';
import './App.css';
import Signin from './components/SignIn';
import Signup from './components/SignUp';
import Main from './components/Main';
import ManagementUser from './components/ManagementUser';
import Signout from './components/SignOut';
import Rental from './components/Rental';
import Upload from './components/Upload';
import SpaceList from './components/SpaceList';
import SpaceDetail from './components/SpaceDetail';
import Community from './components/Community';
import editProfile from './components/EditProfile';
import RentalList from './components/RentalList';
import UploadList from './components/UploadList';
import BoardList from './components/BoardList';
import BoardDetail from './components/BoardDetail';
import BoardUpdate from './components/BoardUpdate';
import Chart from './components/Chart';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="black-nav">
          <div className="nav-outer-menu">
            {sessionStorage.getItem("id") === "admin" && <Link to="/manageuser"><div className="nav-inner-right nav-inner-menu">관리</div> </Link>}
            <Link to="/chart"><div className="nav-inner-right nav-inner-menu">통계</div> </Link>
            <Link to="/community"><div className="nav-inner-right nav-inner-menu">커뮤니티</div> </Link>
            <Link to="/upload"><div className="nav-inner-right nav-inner-menu">공간등록</div> </Link>
            <Link to="/rental"><div className="nav-inner-right nav-inner-menu">공간대여</div> </Link>
            <Link to="/editProfile"><div className="nav-inner-right nav-inner-menu">내 정보</div> </Link>
            {sessionStorage.getItem("id") !== null && <Link to="/signout"><div className="nav-inner-right nav-inner-menu">로그아웃</div></Link> }
            {sessionStorage.getItem("id") === null && <Link to="/signin"><div className="nav-inner-right nav-inner-menu">로그인</div> </Link>}
            {sessionStorage.getItem("id") !== null && <div className="nav-inner-right nav-inner-menu nav-inner-userNickName">{sessionStorage.getItem("id")}님 반갑습니다.</div>}
          </div>
          <Link to="/"><div className="nav-inner-left nav-inner-title">Sapce Group</div></Link>
          {/* <div className="nav-inner-left"><input type="text" placeholder="검색어를 입력해주세요."/></div>
          <Link to="/"><div className="nav-inner-left"><input type="button" /></div></Link> */}
        </div>

        <div className="screen">
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/manageuser" component={ManagementUser} />
          <Route path="/signout" component={Signout} />
          <Route path="/rental" component={Rental} />
          <Route path="/upload" component={Upload} />
          <Route path="/spaceList" component={SpaceList} />
          <Route path="/spaceDetail" component={SpaceDetail} />
          <Route path="/community" component={Community} />
          <Route path="/editProfile" component={editProfile} />
          <Route path="/rentalList" component={RentalList} />
          <Route path="/uploadList" component={UploadList} />
          <Route path="/boardList" component={BoardList} />
          <Route path="/boardDetail" component={BoardDetail} />
          <Route path="/boardUpdate" component={BoardUpdate} />
          <Route path="/chart" component={Chart} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
