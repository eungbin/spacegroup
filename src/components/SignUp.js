import React, {useState} from 'react';
import '../css/Signup.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function SignUp() {
    const history = useHistory();

    const onSignUpSubmit = async() => {
        let id = document.getElementById("input-id").value;
        let pw = document.getElementById("input-password").value;
        let pw_check = document.getElementById("input-password-check").value;
        let name = document.getElementById("input-name").value;
        let phone = document.getElementById("input-phone").value;
        let address = document.getElementById("input-address").value;
        let gender = document.getElementById("input-gender").value;

        if(pw !== pw_check) {
            alert("비밀번호와 비밀번호확인란 다름");
            return;
        }

        if(gender !== "M" && gender !== "F") {
            alert("성별란은 M(남자)혹은 F(여자)만 입력 가능합니다.");
            return;
        }

        await axios.post('/api/signup', null,  {
            params: {
                id: id,
                pw: pw,
                name: name,
                phone: phone,
                address: address,
                gender: gender
            }
        })
        .then(res => {
            if(res.data.status) {
                alert("회원가입 성공");
                history.push("/");
                history.go(0);
            } else {
                if(res.data.err.code === "ER_DUP_ENTRY") {
                    alert("아이디 중복");
                }
            }
        })
        .catch()
    }

    return(
        <div>
            <h1 className="header-login">Sign-up</h1>
            <div className="container-login">
                <div className="container-login-main">
                    <h4>ID</h4>
                    <input className="input-login" id="input-id" type="text" name="id" placeholder="Enter id"></input>
                    <h4>Password</h4>
                    <input className="input-login" id="input-password" type="password" name="pw" placeholder="Enter password"></input>
                    <h4>Password Check</h4>
                    <input className="input-login" id="input-password-check" type="password" name="pw-check" placeholder="Check the password"></input>
                    <h4>Name</h4>
                    <input className="input-login" id="input-name" type="text" name="name" placeholder="Enter name"></input>
                    <h4>Phone</h4>
                    <input className="input-login" id="input-phone" type="text" name="phone" placeholder="Enter phone-number"></input>
                    <h4>Address</h4>
                    <input className="input-login" id="input-address" type="text" name="address" placeholder="Enter address"></input>
                    <h4>Gender</h4>
                    <input className="input-login" id="input-gender" maxLength="1" type="text" name="gender" placeholder="Enter gender (M of F)"></input>
                    <Button variant="contained" className="button-submit" onClick={onSignUpSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;