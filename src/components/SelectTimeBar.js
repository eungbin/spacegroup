import './../css/SelectTimeBar.css';
import {React, useState, memo, forwardRef, useImperativeHandle} from 'react';

const SelectTimeBar = forwardRef((props, ref) => {
    let chooseList = [...props.clickList];

    const onChangeTime = (e) => {
        if(e.target.className === "innerBox available") {
            e.target.className = "innerBox available choosed";
            chooseList.push(parseInt(e.target.id));
            chooseList.sort(function(a, b) { return a-b; });
            props.setClickList([...chooseList]);
        } else if(e.target.className === "innerBox available choosed") {
            let filtered = chooseList.filter((element) => element !== parseInt(e.target.id));
            chooseList = [...filtered];
            e.target.className = "innerBox available";
            props.setClickList([...chooseList]);
        }
    }

    useImperativeHandle(ref, () => ({
        reset() {
            resetBox();
        }
    }));

    const resetBox = () => {
        for(let i=0; i<25; i++) {
            if(document.getElementById(String(i)) !== null) {
                document.getElementById(String(i)).className = "innerBox available";
            }
        }
        props.setClickList([]);
    }

    // resetBox();

    if(Array.isArray(props.listReservation) && props.listReservation.length !== 0) {
        props.listReservation.map(i => {
            for(let j=i.rentalStartTime; j<i.rentalEndTime; j++) {
                    document.getElementById(String(j)).className = "innerBox notAvailable";
            }
        });
    }

    const rendering = () => {
        const result = [];
        for(let i=0; i<25; i++) {
            if(props.clickList.indexOf(i) === -1) {
                result.push(<div className="innerBox available" id={i} onClick={onChangeTime}>{i}</div>);
            } else {
                result.push(<div className="innerBox available choosed" id={i} onClick={onChangeTime}>{i}</div>);
            }
        }
        return result;
    }

  return (
    <div class="box">
        <div id="tab">
            {rendering()}
        </div>
    </div>
  );
});
export const MemoizedTimeBar = memo(SelectTimeBar);
export default SelectTimeBar;