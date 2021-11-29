
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu() {
    return (
        <div className="black-nav">
            <div className="nav-outer-menu">
                {sessionStorage.getItem("id") === "admin" && <Link to="/manageuser"><div className="nav-inner-right nav-inner-menu">관리</div> </Link>}
                <Link to="/chart"><div className="nav-inner-right nav-inner-menu">통계</div> </Link>
                <Link to="/community"><div className="nav-inner-right nav-inner-menu">커뮤니티</div> </Link>
                <Link to="/upload"><div className="nav-inner-right nav-inner-menu">공간등록</div> </Link>
                <Link to="/rental"><div className="nav-inner-right nav-inner-menu">공간대여</div> </Link>
                <Link to="/editProfile"><div className="nav-inner-right nav-inner-menu">내 정보</div> </Link>
                {sessionStorage.getItem("id") !== null && <Link to="/signout"><div className="nav-inner-right nav-inner-menu">로그아웃</div></Link>}
                {sessionStorage.getItem("id") === null && <Link to="/signin"><div className="nav-inner-right nav-inner-menu">로그인</div> </Link>}
                {/* {sessionStorage.getItem("id") !== null && <div className="nav-inner-right nav-inner-menu nav-inner-userNickName">{sessionStorage.getItem("userNickName")}님 반갑습니다.</div>} */}
            </div>
            <Link to="/"><div className="nav-inner-left nav-inner-title">Sapce Group</div></Link>
            {/* <div className="nav-inner-left"><input type="text" placeholder="검색어를 입력해주세요."/></div>
          <Link to="/"><div className="nav-inner-left"><input type="button" /></div></Link> */}
        </div>
    )
}

export default NavigationMenu;