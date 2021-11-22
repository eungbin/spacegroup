import React, { useState, useEffect } from 'react';
import "../css/SpaceDetail.css";
import axios from 'axios';
import Loading from './Loading';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { MemoizedCalendar } from './Calendar';
import Calendar from './Calendar';
import Count from './Count';

function SpaceDetail(props) {
    let spaceSeq = props.location.state.spaceSeq;
    const [space, setSpace] = useState(null);
    const [totalPay, setTotalPay] = useState(0);
    const [clickList, setClickList] = useState([]);
    const [personCount, setPersonCount] = useState(1);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getSpace/detail', {
                params: {
                    spaceSeq: spaceSeq,
                }
            });
            setSpace(res.data[0]);
        })()
    }, []);

    return(
        <div className="detailLayout">
            {space === null ? <h1>Loading...</h1> : 
            <>
                <div className="detailWrapper">
                    <h1>{space.spaceName}</h1>
                    <h3 className="spaceTags">{space.spaceTags.split(', ').map(i => "#" + i + " ")}</h3>
                    <Carousel showThumbs={false}>
                        <div>
                            <img className="detailImage" src={space.spaceImageUrl.split(',')[0]} />
                        </div>
                        <div><img className="detailImage" src={space.spaceImageUrl.split(',')[1]} /></div>
                        <div><img className="detailImage" src={space.spaceImageUrl.split(',')[2]} /></div>
                    </Carousel>
                    <h2>공간소개</h2>
                    <p>{space.spaceInfo}</p>
                    <h2>시설안내</h2>
                    <p>{space.spaceFacility}</p>
                    <h2>예약 시 주의사항</h2>
                    <p>{space.spaceNotice}</p>
                </div>
                <div className="buyWrapper">
                    <p className="buySpaceName">{space.spaceName}</p>
                    <div>{space.payPerHour}원/시간 최대 {space.spaceLimitPerson}명</div>
                    <h3>날짜 선택</h3>
                    <Calendar spaceSeq={space.spaceSeq} clickList={clickList} setClickList={setClickList} />
                    <Count clickList={clickList} payPerHour={space.payPerHour} spaceLimitPerson={space.spaceLimitPerson} />
                </div>
            </>
            }
        </div>
    );
}

export default SpaceDetail;