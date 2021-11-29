import {React, useState} from 'react';
import '../css/Signin.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

function SignIn() {

    const history = useHistory();
    const [showFail, setShowFail] = useState(false);

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
            if(res.data.status) {
                console.log("로그인 성공");
                sessionStorage.setItem("id", id);
                sessionStorage.setItem("userSeq", res.data.userSeq);
                sessionStorage.setItem("userNickName", res.data.userNickName);
                history.push("/");
                history.go(0);
            } else {
                setShowFail(true);
                console.log("아이디 혹은 비밀번호를 확인해 주세요.");
            }
        })
        .catch()
    }

    return(
        <div>
            <h1 className="header-signin">로그인</h1>
            <div className="container-main">
                <div className="container-signin">
                    <a href="signInKakao">
                        <div className="container-signin-kakao">
                            <div className="innerContainer"><img src="imgs/kakao_logo.png" className="kakaoLogo" />카카오로 로그인하기</div>
                        </div>
                    </a>

                    <h3>또는</h3>

                    <div className="container-signin-main">
                        <input className="input-signin" id="input-id" type="text" name="id" placeholder="아이디"></input>
                        <input className="input-signin" id="input-signin-password" type="password" name="password" placeholder="비밀번호"></input>
                        <Button variant="contained" className="button-signin-submit" onClick={onLoginSubmit}>아이디로 로그인하기</Button>
                    </div>

                    <div className="container-signup">아직 스페이스그룹 회원이 아니신가요? <a href="signup" className="btn-signup">회원가입</a></div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;