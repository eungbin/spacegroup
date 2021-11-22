import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/BoardDetail.css';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function BoardDetail(props) {
    const [boardDetail, setBoardDetail] = useState([]);
    let boardSeq = props.location.state.boardSeq;

    let history = useHistory();

    const classes = useStyles();

    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/getBoardList/detail', {
                params: {
                    boardSeq: boardSeq,
                }
            });
            console.log(res);
            setBoardDetail(res.data);
        })()
    }, []);

    const updateBoard = () => {
        history.push({
            pathname: "/boardUpdate",
            state: {
                boardSeq: boardDetail[0].boardSeq,
                boardInner: boardDetail[0].boardInner,
                boardTitle: boardDetail[0].boardTitle,
            }
        })
    }

    const removeBoard = () => {

    }

    return(
        <div className={classes.root}>
            {boardDetail.length === 0 ? <h1>Loading...</h1> : 
                <>
                    <h1>{boardDetail[0].boardTitle}</h1>
                    <Grid container spacing={3}>
                        <Grid item xs={7}></Grid>
                        <Grid item xs={1}>작성자</Grid>
                        <Grid item xs={2}>작성날짜</Grid>
                        <Grid item xs={2}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={1}>본문</Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={1}>{boardDetail[0].userNickName}</Grid>
                        <Grid item xs={2}>{String(boardDetail[0].boardDate).substring(0, 10)}</Grid>
                        <Grid item xs={2}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}><textarea cols="120" rows="30" readOnly value={boardDetail[0].boardInner}></textarea></Grid>
                        <Grid item xs={3}></Grid>

                        <Grid item xs={8}></Grid>
                        <Grid item xs={1}><Button variant="contained" className="buttonUpdate" onClick={updateBoard}>수정하기</Button></Grid>
                        <Grid item xs={1}><Button variant="contained" className="buttonRemove" onClick={removeBoard}>삭제하기</Button></Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </>
            }
        </div>
    );
}

export default BoardDetail;