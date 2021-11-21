import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MypageSide() {

    return(
        <div>
            <Link to="/editProfile"><div className="left-menu-inner">프로필 관리</div></Link>
            <Link to="/rentalList"><div className="left-menu-inner">대여내역</div></Link>
            <Link to="/uploadList"><div className="left-menu-inner">등록내역</div></Link>
            <Link to="/boardList"><div className="left-menu-inner">내가 쓴 글</div></Link>
            <div className="left-menu-inner">내가 쓴 글</div>
        </div>
    );
}

export default MypageSide;