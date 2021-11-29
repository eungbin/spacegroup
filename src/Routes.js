import React from 'react';
import { Route } from 'react-router-dom';
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
import ReplyList from './components/ReplyList';
import WriteBoard from './components/WriteBoard';

const Routes = () => {
    return <>
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
        <Route path="/replyList" component={ReplyList} />
        <Route path="/writeBoard" component={WriteBoard} />
    </>
}
export default Routes;