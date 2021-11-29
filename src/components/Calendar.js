import './../css/Calendar.css';
import {React, memo, useState, useEffect, useRef} from 'react';
import moment from 'moment';
import axios from 'axios';
// import { MemoizedTimeBar } from './SelectTimeBar';
import SelectTimeBar from './SelectTimeBar';

const Calendar =(props)=>{

  const [getMoment, setMoment]=useState(moment());
  const [date, setDate] = useState(getMoment.format('YYYYMMDD'));
  const [listReservation, setListReservation] = useState();

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const refResetBar = useRef({});

  useEffect(() => {
    selectReservation(getMoment.format('YYYYMMDD'));
  }, []);

    const calendarArr=()=>{
      let result = [];
      let week = firstWeek;
      for ( week; week <= lastWeek; week++) {
        result = result.concat(
          <tr key={week}>
            {
              Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

                if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                  return(
                      <td key={index} onClick={onChangeDate} className="clicked" >
                        {days.format('D')}
                      </td>
                  );
                }else if(moment().format('YYYYMMDD') > days.format('YYYYMMDD')){
                    return(
                        <td key={index} style={{backgroundColor:'gray'}} >
                          {days.format('D')}
                        </td>
                    );
                }
                else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index} onClick={onChangeDate}>
                        {days.format('M/D')}
                      </td>
                  );
                }
                else{
                  return(
                      <td key={index} onClick={onChangeDate} >
                        {days.format('D')}
                      </td>
                  );
                }
              })
            }
          </tr>
        );
      }
      return result;
    }

    const onChangeDate = (e) => {
        let days = e.target.innerHTML;
        if(days.length === 1) {days = "0" + days;}
        setDate(today.format("YYYYMM") + days);
        props.setDate(today.format("YYYYMM") + days)
        document.querySelectorAll('td').forEach((elem, index) => {
          if(elem.className === "clicked") {
            elem.className = "notClicked";
          }
        });
        e.target.className = "clicked";
        selectReservation(today.format("YYYYMM") + days);
        refResetBar.current.reset();
  }

  const selectReservation = async (date) => {
    const res = await axios.get('/api/getRetalList/space', {
      params: {
          spaceSeq: props.spaceSeq,
          date: date,
      }
    });
    setListReservation(res.data);
  }

  return (
    <>
      <div className="calendarBody">

          <div className="control">
            <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
            <span>{today.format('YYYY 년 MM 월')}</span>
            <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
          </div>
          <table>
            <tbody>
              {calendarArr()}
            </tbody>
          </table>
      </div>
      {/* <MemoizedTimeBar listReservation={listReservation} clickList={props.clickList} setClickList={props.setClickList}/> */}
      <SelectTimeBar listReservation={listReservation} clickList={props.clickList} setClickList={props.setClickList} ref={refResetBar} />
    </>
  );
}
// export const MemoizedCalendar = memo(Calendar);
export default Calendar;