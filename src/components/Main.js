import React, { useState, useEffect } from 'react';
import "../css/Main.css";

function Main() {

    return(
        <div>
            <h1>어떤 공간을 찾고 있나요?</h1>
            <div className="imageContainer">
                <div className="firstLine">
                    <img src="imgs/img_1.png" className="leftImage images" />
                    <img src="imgs/img_2.png" className="rightImage images" />
                </div>
                <div className="secondLine">
                    <img src="imgs/img_3.png" className="leftImage images" />
                    <img src="imgs/img_4.png" className="rightImage images" />
                </div>
                <div className="thirdLine">
                    <img src="imgs/img_5.png" className="leftImage images" />
                    <img src="imgs/img_6.png" className="rightImage images" />
                </div>
            </div>
        </div>
    );
}

export default Main;