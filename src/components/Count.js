import React, { useState, useEffect } from 'react';
import "../css/Count.css";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Count(props) {

    const [personCount, setPersonCount] = useState(1);
    let clickList = props.clickList;
    let date = props.date;
    let spaceSeq = props.spaceSeq;
    let spaceAddrSummary = props.spaceAddrSummary;
    let totalPay = props.clickList.length * props.payPerHour * personCount;
    let startTime = clickList[0];
    let endTime = clickList[clickList.length-1]+1;

    let history = useHistory();

    useEffect(() => {

    }, []);

    const increaseCount = () => {
        if(personCount < props.spaceLimitPerson) {
            document.getElementById("personCount").value = personCount + 1;
            setPersonCount(personCount+1);
        }
    }

    const decreaseCount = () => {
        if(personCount > 1) {
            document.getElementById("personCount").value = personCount - 1;
            setPersonCount(personCount-1);
        }
    }

    const onPay = async () => {
        if(window.confirm("예약을 진행하시겠습니까?")) {
            if(clickList.length > 0 && isContinuous(clickList)) {
                // await axios.post('/v1/payment/ready', null,  {
                //     params: {
                //         cid: "TC0ONETIME",
                //         partner_order_id: "partner_order_id",
                //         partner_user_id: "partner_user_id",
                //         item_name: "공간결제",
                //         quantity: 1,
                //         total_amount: totalPay,
                //         vat_amount: 0,
                //         tax_free_amount: 0,
                //         approval_url: "http://localhost:3000/",
                //         fail_url: "http://localhost:3000/",
                //         cancel_url: "http://localhost:3000/",
                //     },
                //     headers: {
                //         Authorization: "KakaoAK 55f436661df8abc84470b85cde430c4b",
                //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                //         "Access-Control-Allow-Origin" : "*",
                //         "Access-Control-Allow-Credentials": true,
                //     }
                // })
                // .then(res => {
                //     console.log(res.data.next_redirect_pc_url);
                //     document.writeln('<a href=' + res.data.next_redirect_pc_url + '>' + res.data.next_redirect_pc_url + '</a>')
                //     console.log("TEST");
                // })
                // .catch()
                const res = await axios.get('/api/reservation', {
                    params: {
                        date: date,
                        spaceSeq: spaceSeq,
                        spaceAddrSummary: spaceAddrSummary,
                        totalPay: totalPay,
                        startTime: startTime,
                        endTime: endTime,
                        userSeq: sessionStorage.getItem("userSeq")
                    }
                });

                if(res.data) {
                    window.location.reload();
                } else {
                    alert("에약 실패");
                }
            } else if(clickList.length === 0) {
                alert("시간을 선택해주세요.");
            } else {
                alert("연속된 시간을 선택해 주세요.");
            }
        }
    }

    const isContinuous = (arr) => {
        for(let i=0; i<arr.length-1; i++) {
            if(arr[i] !== (arr[i+1]-1)) {
                return false;
            }
        }
        return true;
    }

    return(
        <>
            <button onClick={decreaseCount}>-</button><input type="number" id="personCount" defaultValue="1" disabled/><button onClick={increaseCount}>+</button>
            <p>{totalPay}원</p>
            <Button variant="contained" className="buttonPay" onClick={onPay}>결제하기</Button>
        </>
    );
}

export default Count;