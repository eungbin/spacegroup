import React from 'react';
import '../css/Signin.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function SignIn() {

    const history = useHistory();

    const onLoginSubmit = async() => {
        let id = document.getElementById("input-id").value;
        let pw = document.getElementById("input-signin-password").value;

        await axios.get('/api/signin', {
            params: {
                id: id,
                pw: pw
            }
        })
        .then(res => {
            console.log(res);
            if(res.data.status) {
                console.log("로그인 성공");
                sessionStorage.setItem("id", id);
                history.push("/");
                history.go(0);
            } else {
                console.log("아이디 혹은 비밀번호를 확인해 주세요.");
            }
        })
        .catch()
    }

    return(
        <div>
            <h1 className="header-signin">Log-In</h1>
            <div className="container-signin">
                <div className="container-signin-main">
                    <h4>ID</h4>
                    <input className="input-signin" id="input-id" type="text" name="id" placeholder="Enter id"></input>
                    <h4>Password</h4>
                    <input className="input-signin" id="input-signin-password" type="password" name="password" placeholder="Enter password"></input>
                    <Button variant="contained" className="button-signin-submit" onClick={onLoginSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;