import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/UploadList.css';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment';

function UploadList() {

    const [uploadList, setUploadList] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getUploadList/mypage', {
                params: {
                    userSeq: sessionStorage.getItem("userSeq"),
                }
            });
            setUploadList(res.data)
        })()
    }, []);

    const columns = [
        { field: 'id', headerName: 'No', width: 95 },
        {
          field: 'name',
          headerName: 'Name',
          width: 250,
        },
        {
          field: 'type',
          headerName: 'Type',
          width: 150,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 300,
        },
        {
          field: 'date',
          headerName: 'Date',
          width: 200,
        },
    ];

    const rows = [];
    
    if(Array.isArray(uploadList) && uploadList.length !== 0) {
        uploadList.map((i, index) => {
            let parseDate = new Date(i.spaceRegDate);
            let parsed = moment(parseDate).format("YYYY-MM-DD");
            rows.push({id: i.spaceSeq, name: i.spaceName, type: i.spaceType, address: i.spaceAddress, date: String(parsed)});
        })
    }

    return(
        <div>
            <h1>등록내역</h1>
            <div id="grid">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
}

export default UploadList;