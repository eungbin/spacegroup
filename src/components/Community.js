import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Community.css';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment';
import { useHistory } from "react-router-dom";

function Community() {

    const [boardList, setBoardList] = useState([]);
    let history = useHistory();

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getBoard', {
                params: {
                    
                }
            });
            console.log(res);
            setBoardList(res.data)
        })()
    }, []);

    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
        {
          field: 'title',
          headerName: 'Title',
          width: 400,
          editable: true,
        },
        {
          field: 'writer',
          headerName: 'Writer',
          width: 200,
          editable: true,
        },
        {
          field: 'date',
          headerName: 'Date',
          sortable: true,
          width: 200,
        },
    ];

    const rows = [];
    
    if(Array.isArray(boardList) && boardList.length !== 0) {
        boardList.map((i, index) => {
            let parseDate = new Date(i.boardDate);
            let parsed = moment(parseDate).format("YYYY-MM-DD");
            rows.push({id: i.boardSeq, title: i.boardTitle, writer: i.userNickName, date: String(parsed)});
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
            <h1 className="header-community">커뮤니티</h1>
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
    );
}

export default Community;