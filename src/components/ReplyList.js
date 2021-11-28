import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/BoardList.css';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment';
import MypageSide from './MyPageSide';
import { useHistory } from "react-router-dom";

function ReplyList() {

    const [replyList, setReplyList] = useState([]);

    let history = useHistory();

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getReplyList/mypage', {
                params: {
                    userSeq: sessionStorage.getItem("userSeq"),
                }
            });
            console.log(res.data);
            setReplyList(res.data);
        })()
    }, []);

    const columns = [
        { field: 'id', headerName: 'No', width: 95 },
        {
          field: 'text',
          headerName: 'Text',
          width: 250,
        },
        {
          field: 'date',
          headerName: 'Date',
          width: 150,
        },
        {
            field: 'boardId',
            headerName: 'BoardID',
            width: 150,
          },
    ];

    const rows = [];
    
    if(replyList.length !== 0) {
        replyList.map(i => {
            let parsed = moment(new Date(i.replyDate)).format("YYYY-MM-DD");
            rows.push({id: i.replySeq, text: i.replyText, date: String(parsed), boardId: i.boardSeq});
        })
    }

    const goBoardDetail = (e) => {
        history.push({
            pathname: "/boardDetail",
            state: {boardSeq: e.row.boardId}
        })
    }

    return(
        <div>
            <div className="left-menu">
                <MypageSide />
            </div>
            <div className="inner-body">
                <h1>내가 쓴 댓글</h1>
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

export default ReplyList;