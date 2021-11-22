import React, { useState, useEffect } from 'react';
import "../css/Upload.css";
import Button from '@material-ui/core/Button';
import axios from 'axios';

function Upload() {
    let userSeq = sessionStorage.getItem("userSeq");

    const onUploadSubmit = async() => {
        let spaceName = document.getElementById("input-spaceName").value;
        let spaceType = document.getElementById("spaceType").value;
        let spaceAddress = document.getElementById("input-spaceAddress").value;
        let spaceTags = document.getElementById("input-spaceTags").value;
        let perHourPay = document.getElementById("input-perHourPay").value;
        let spaceLimitPerson = document.getElementById("input-spaceLimitPerson").value;
        let spaceInfo = document.getElementById("textarea-spaceInfo").value;
        let spaceFacility = document.getElementById("textarea-spaceFacility").value;
        let spaceNotice = document.getElementById("textarea-spaceNotice").value;
        let uploadedFile = document.getElementById('images').files;

        if(uploadedFile.length !== 3) {
            console.log("파일 3개 업로드해");
            return;
        }

        if(spaceName === "" || spaceType === "" || spaceAddress === "" || spaceTags === "" || perHourPay === "" || spaceLimitPerson === "") {
            console.log("빈칸없이 입력해");
            return;
        }
        
        if(spaceInfo === "" || spaceFacility === "" || spaceNotice === "") {
            console.log("빈칸없이 입력해2");
            return;
        }

        const res = await axios.post('/api/upload', null,  {
            params: {
                spaceName: spaceName,
                spaceType: spaceType,
                spaceAddress: spaceAddress,
                spaceTags: spaceTags,
                spaceInfo: spaceInfo,
                spaceFacility: spaceFacility,
                spaceNotice: spaceNotice,
                perHourPay: perHourPay,
                spaceLimitPerson: spaceLimitPerson,
                firstFile: uploadedFile[0].name,
                secondFile: uploadedFile[1].name,
                thirdFile: uploadedFile[2].name,
                userSeq: userSeq,
            }
        });

        console.log(res);
    }

    return(
        <div>
            <h1>공간등록</h1>
            <div className="container-main">
                <div className="container-upload">
                    <div className="container-upload-main">
                        <input className="input-upload" id="input-spaceName" type="text" name="spaceName" placeholder="공간명"></input>
                        <select className="spaceType" name="spaceType" id="spaceType">
                            <option value="">공간유형을 선택해주세요.</option>
                            <option value="party">파티룸</option><option value="practice">연습실</option><option value="vocal">보컬연습실</option>
                            <option value="study">스터디룸</option><option value="photo">촬영스튜디오</option><option value="meeting">회의실</option>
                            <option value="dog">세미나실</option><option value="dog">악기연습실</option><option value="dog">호리존</option>
                            <option value="dog">라이브방송</option><option value="dog">강의실</option><option value="dog">녹음실</option>
                            <option value="dog">공유주방</option><option value="dog">카페</option><option value="dog">스몰웨딩</option>
                            <option value="dog">갤러리</option><option value="dog">운동시설</option><option value="dog">실외촬영</option>
                            <option value="dog">컨퍼런스</option><option value="dog">공연장</option><option value="dog">독립오피스</option>
                            <option value="dog">코워킹오피스</option><option value="dog">비상주서비스</option><option value="dog">원데이오피스</option>
                        </select>
                        <select className="spaceType" id="spaceAddress" name="spaceAddress">
                            <option value="">지역을 선택해주세요.</option>
                            <option value="SE">서울</option>
                            <option value="BS">부산</option>
                            <option value="IC">인천</option>
                            <option value="DG">대구</option>
                            <option value="DJ">대전</option>
                            <option value="GJ">광주</option>
                            <option value="GG">경기</option>
                            <option value="US">울산</option>
                            <option value="GN">경남</option>
                            <option value="GB">경북</option>
                            <option value="CB">충북</option>
                            <option value="CN">충남</option>
                            <option value="JN">전남</option>
                            <option value="JB">전북</option>
                            <option value="JJ">제주</option>
                            <option value="SJ">세종</option>
                            <option value="GW">강원</option>
                        </select>
                        <input className="input-upload" id="input-spaceAddress" type="text" name="spaceAddress" placeholder="상세주소"></input>
                        <input className="input-upload" id="input-spaceTags" type="text" name="spaceTags" placeholder="태그"></input>
                        <input className="input-upload" id="input-spaceLimitPerson" type="number" name="spaceLimitPerson" placeholder="최대수용인원"></input>
                        <input className="input-upload" id="input-perHourPay" type="number" name="perHourPay" placeholder="시간당 요금"></input>
                        <textarea className="textarea-upload" id="textarea-spaceInfo"></textarea>
                        <textarea className="textarea-upload" id="textarea-spaceFacility"></textarea>
                        <textarea className="textarea-upload" id="textarea-spaceNotice"></textarea>
                        <form>
                            <div className="input-upload2"><input type="file" id="images" multiple /></div>
                        </form>
                        <Button variant="contained" className="button-upload-submit" onClick={onUploadSubmit}>등록하기</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;