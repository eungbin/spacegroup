import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/editProfile.css';
import Button from '@material-ui/core/Button';

function editProfile() {

    return(
        <div>
            <h1>프로필 관리</h1>
            <div className="changeNickName">
                닉네임 <input className="input-nickName" id="input-id" type="text" name="id" placeholder={sessionStorage.getItem("id")}></input>
                <Button variant="contained" className="button-change-submit">변경하기</Button>
            </div>
            <div className="email">이메일</div>
            <div className="phone">연락처</div>
        </div>
    );
}

export default editProfile;