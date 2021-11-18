import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Mypage.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import editProfile from './EditProfile';
import RentalList from './RentalList';
import UploadList from './UploadList';
import BoardList from './BoardList';

function Mypage() {

    return(
        <div>
            <BrowserRouter>
                
                <div className="left-menu">
                    <Link to="/editProfile"><div className="left-menu-inner">프로필 관리</div></Link>
                    <Link to="/rentalList"><div className="left-menu-inner">대여내역</div></Link>
                    <Link to="/uploadList"><div className="left-menu-inner">등록내역</div></Link>
                    <Link to="/boardList"><div className="left-menu-inner">내가 쓴 글</div></Link>
                    <div className="left-menu-inner">내가 쓴 글</div>
                </div>
                <div className="inner-body">
                    <Route exact path="/editProfile" component={editProfile} />
                    <Route path="/rentalList" component={RentalList} />
                    <Route path="/uploadList" component={UploadList} />
                    <Route path="/boardList" component={BoardList} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Mypage;