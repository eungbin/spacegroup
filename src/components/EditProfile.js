import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/editProfile.css';
import Button from '@material-ui/core/Button';
import MyPageSide from './MyPageSide';

function editProfile() {

    const editNickName = async () => {
        let changeId = document.getElementById("input-id").value;
        if(window.confirm("닉네임을 변경하시겠습니까?")) {
            if(changeId !== sessionStorage.getItem("userNickName")) {
                await axios.get('/api/editNickName', {
                    params: {
                        userSeq: sessionStorage.getItem("userSeq"),
                        userNickName: changeId,
                    }
                })
                .then(res => {
                    sessionStorage.setItem("userNickName", changeId);
                })
                .catch()
            } else {
                alert("닉네임이 동일합니다")
            }
        }
    }

    return(
        <div>
            <div className="left-menu">
                <MyPageSide />
            </div>
            <div className="inner-body">
                <h1>프로필 관리</h1>
                <div className="changeNickName">
                    닉네임 <input className="input-nickName" id="input-id" type="text" name="id" placeholder={sessionStorage.getItem("userNickName")}></input>
                    <Button variant="contained" className="button-change-submit" onClick={editNickName}>변경하기</Button>
                </div>
                <div className="email">이메일</div>
                <div className="phone">연락처</div>
            </div>
        </div>
    );
}

export default editProfile;