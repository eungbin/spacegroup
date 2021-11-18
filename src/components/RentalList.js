import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/RentalList.css';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment';

function RentalList() {

    const [rentalList, setRentalList] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getRentalList/mypage', {
                params: {
                    userSeq: sessionStorage.getItem("userSeq"),
                }
            });
            setRentalList(res.data)
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
            field: 'start',
            headerName: 'Start',
            width: 150,
        },
        {
            field: 'end',
            headerName: 'End',
            width: 150,
        },
        {
          field: 'date',
          headerName: 'Date',
          width: 200,
        },
        {
            field: 'pay',
            headerName: 'Payment',
            width: 200,
        },
    ];

    const rows = [];
    
    if(Array.isArray(rentalList) && rentalList.length !== 0) {
        rentalList.map((i, index) => {
            let parseDate = new Date(i.rentalDate);
            let parsed = moment(parseDate).format("YYYY-MM-DD");
            rows.push({id: i.rentalSeq, name: i.spaceName, type: i.spaceType, start: i.rentalStartTime+":00", end: i.rentalEndTime+":00", date: String(parsed), pay: i.rentalPayment+"원"});
        })
    } 

    return(
        <div>
            <h1>대여내역</h1>
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

export default RentalList;