import React, { useState, useEffect } from 'react';
import "../css/Count.css";

function Count(props) {

    const [personCount, setPersonCount] = useState(1);
    let totalPay = props.clickList.length * props.payPerHour * personCount;

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

    return(
        <>
            <button onClick={decreaseCount}>-</button><input type="number" id="personCount" defaultValue="1" disabled/><button onClick={increaseCount}>+</button>
            <p>{totalPay}원</p>
        </>
    );
}

export default Count;