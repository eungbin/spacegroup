import React, { useState, useEffect } from 'react';
import "../css/spaceList.css";
import axios from 'axios';
import Loading from './Loading';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function SpaceList(props) {
    let category = props.location.state.category;
    let tag = props.location.state.tag;
    const [spaceList, setSpaceList] = useState();

    useEffect(() => {
        if(category !== undefined) {
            (async () => {
                const res = await axios.get('/api/getSpace', {
                    params: {
                        category: category,
                    }
                });
                setSpaceList(res.data);
            })()
        } else if(tag !== undefined) {
            (async () => {
                const res = await axios.get('/api/getSpace/tag', {
                    params: {
                        tag: tag,
                    }
                });
                setSpaceList(res.data);
            })()
        }
    }, []);

    return(
        <div>
            {category !== undefined ? <h1>{category}(으)로 검색한 결과</h1> : <h1>{tag}(으)로 검색한 결과</h1>}
            <div className="listWrapper">
                {spaceList === undefined ? <h1>Loading...</h1> : 
                spaceList.map((i, index) => {
                    return <div className="spaceWrapper">
                        <div className="imageWrapper">
                            <Carousel showThumbs={false}>
                                <Link to={{pathname: "/spaceDetail", state: {spaceSeq: i.spaceSeq}}}><div><img className="innerImage" src={i.spaceImageUrl.split(',')[0]} /></div></Link>
                                <Link to={{pathname: "/spaceDetail", state: {spaceSeq: i.spaceSeq}}}><div><img className="innerImage" src={i.spaceImageUrl.split(',')[1]} /></div></Link>
                                <Link to={{pathname: "/spaceDetail", state: {spaceSeq: i.spaceSeq}}}><div><img className="innerImage" src={i.spaceImageUrl.split(',')[2]} /></div></Link>
                            </Carousel>
                        </div>
                        <div className="spaceNameWrapper">{i.spaceName}</div>
                        <div className="spaceAddrWrapper addrTags">{i.spaceAddress}</div>
                        <div className="spaceTagsWrapper addrTags">{i.spaceTags}</div>
                        <div className="spaceHourPay payPerson">{i.payPerHour}원/시간</div>
                        <div className="spaceLimitPerson payPerson">최대 {i.spaceLimitPerson}인</div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default SpaceList;