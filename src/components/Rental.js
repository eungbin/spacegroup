import React, { useState, useEffect } from 'react';
import "../css/Rental.css";
import axios from 'axios';
import Loading from './Loading';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Rental() {
    return(
        <div>
            <h1>어떤 공간을 원하시나요?</h1>

            <div className="category-nav">
                <Link to={{pathname: "/spaceList", state: {category: '파티룸'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />파티룸</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '연습실'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />연습실</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '보컬연습실'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />보컬연습실</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '스터디룸'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />스터디룸</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '촬영스튜디오'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />촬영스튜디오</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '회의실'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />회의실</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '세미나실'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />세미나실</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '악기연습실'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />악기연습실</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '호리존'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />호리존</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '라이브방송'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />라이브방송</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '강의실'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />강의실</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '녹음실'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />녹음실</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '공유주방'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />공유주방</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '카페'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />카페</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '스몰웨딩'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />스몰웨딩</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '갤러리'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />갤러리</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '운동시설'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />운동시설</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '실외촬영'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />실외촬영</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '컨퍼런스'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />컨퍼런스</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '공연장'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />공연장</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '독립오피스'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />독립오피스</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '코워킹오피스'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />코워킹오피스</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '비상주서비스'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />비상주서비스</div></Link>
                <Link to={{pathname: "/spaceList", state: {category: '원데이오피스'}}}><div className="category-items" id="inner-contents"><img src="imgs/img.png" /><br />원데이오피스</div></Link>
            </div>
        </div>
    );
}

export default Rental;