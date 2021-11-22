import React, { useState, useEffect, history } from 'react';
import axios from 'axios';
import '../css/RentalList.css';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import MyPageSide from './MyPageSide';

function RentalList() {

    const [rentalList, setRentalList] = useState([]);

    let history = useHistory();

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
        //   renderCell: (params) => (
        //     <Link href={`/spaceDetail/${params.spaceSeq}`}>{params.id}</Link>
        //   )
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
        // {
        //     field: 'spaceSeq',
        //     headerName: 'Space Id',
        //     width: 150,
        // },
    ];

    const rows = [];
    
    if(Array.isArray(rentalList) && rentalList.length !== 0) {
        rentalList.map((i, index) => {
            let parseDate = new Date(i.rentalDate);
            let parsed = moment(parseDate).format("YYYY-MM-DD");
            rows.push({id: i.rentalSeq, name: i.spaceName, type: i.spaceType, start: i.rentalStartTime+":00", end: i.rentalEndTime+":00", date: String(parsed), pay: i.rentalPayment+"원", spaceSeq: i.spaceSeq});
        })
    }

    const goSpaceDetail = (e) => {
        history.push({
            pathname: "/spaceDetail",
            state: {spaceSeq: e.row.spaceSeq}
        })
    }

    return(
        <div>
            <div className="left-menu">
                <MyPageSide />
            </div>
            <div className="inner-body">
                <h1>대여내역</h1>
                <div id="grid">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={8}
                        checkboxSelection
                        disableSelectionOnClick
                        onRowClick={goSpaceDetail}
                    />
                </div>
            </div>
        </div>
    );
}

export default RentalList;