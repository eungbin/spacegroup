import React from 'react';
import { Route } from 'react-router-dom';
import Signin from './SignIn';
import Signup from './SignUp';
import Main from './Main';
import ManagementUser from './ManagementUser';
import Signout from './SignOut';
import Rental from './Rental';
import Upload from './Upload';
import SpaceList from './SpaceList';
import SpaceDetail from './SpaceDetail';
import Community from './Community';
import editProfile from './EditProfile';
import RentalList from './RentalList';
import UploadList from './UploadList';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardUpdate from './BoardUpdate';
import Chart from './Chart';
import ReplyList from './ReplyList';
import WriteBoard from './WriteBoard';

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