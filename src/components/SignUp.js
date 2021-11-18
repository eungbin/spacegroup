import React, {useState} from 'react';
import '../css/Signup.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function SignUp() {
    const history = useHistory();

    const onSignUpSubmit = async() => {
        let id = document.getElementById("input-id").value;
        let pw = document.getElementById("input-signup-password").value;
        let pwCheck = document.getElementById("input-signup-password-check").value;
        let nickName = document.getElementById("input-nickname").value;

        if(pw !== pwCheck) {
            document.getElementById("errorCheck").innerHTML = "비밀번호와 비밀번호 확인란이 다릅니다.";
            return;
        }

        await axios.post('/api/signup', null,  {
            params: {
                id: id,
                pw: pw,
                nickName: nickName,
            }
        })
        .then(res => {
            if(res.data.status == true) {
                alert("회원가입 성공");
                history.push("/");
                history.go(0);
            } else if(res.data.status == false) {
                document.getElementById("errorCheck").innerHTML = "아이디가 중복됩니다.";
            } else {
                alert(res.data.err);
            }
        })
        .catch()
    }

    return(
        <div>
            <h1 className="header-signup">회원가입</h1>
            <div className="container-main">
                <div className="container-signup">
                    <div className="container-signup-main">
                        <input className="input-signup" id="input-id" type="text" name="id" placeholder="아이디"></input>
                        <input className="input-signup" id="input-signup-password" type="password" name="password" placeholder="비밀번호"></input>
                        <input className="input-signup" id="input-signup-password-check" type="password" name="password-check" placeholder="비밀번호 확인"></input>
                        <input className="input-signup" id="input-nickname" type="text" name="nickname" placeholder="닉네임"></input>
                        <Button variant="contained" className="button-signup-submit" onClick={onSignUpSubmit}>회원가입</Button>
                        <p id="errorCheck"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;