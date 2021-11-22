import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/BoardList.css';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment';
import MypageSide from './MyPageSide';
import { useHistory } from "react-router-dom";

function BoardList() {

    const [boardList, setBoardList] = useState([]);

    let history = useHistory();

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getBoardList/mypage', {
                params: {
                    userSeq: sessionStorage.getItem("userSeq"),
                }
            });
            setBoardList(res.data)
        })()
    }, []);

    const columns = [
        { field: 'id', headerName: 'No', width: 95 },
        {
          field: 'title',
          headerName: 'Title',
          width: 250,
        },
        {
          field: 'date',
          headerName: 'Date',
          width: 150,
        },
    ];

    const rows = [];
    
    if(boardList.length !== 0) {
        boardList.map((i, index) => {
            // let parseDate = new Date(i.boardDate);
            let parsed = moment(new Date(i.boardDate)).format("YYYY-MM-DD");
            rows.push({id: i.boardSeq, title: i.boardTitle, date: String(parsed)});
        })
    }

    const goBoardDetail = (e) => {
        history.push({
            pathname: "/boardDetail",
            state: {boardSeq: e.row.id}
        })
    }

    return(
        <div>
            <div className="left-menu">
                <MypageSide />
            </div>
            <div className="inner-body">
                <h1>내가 쓴 글</h1>
                <div id="grid">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={8}
                        checkboxSelection
                        disableSelectionOnClick
                        onRowClick={goBoardDetail}
                    />
                </div>
            </div>
        </div>
    );
}

export default BoardList;