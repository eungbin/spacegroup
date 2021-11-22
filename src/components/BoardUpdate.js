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

function BoardUpdate(props) {
    let boardSeq = props.location.state.boardSeq;
    let boardTitle = props.location.state.boardTitle;
    let boardInner = props.location.state.boardInner;
    
    console.log(boardTitle);

    let history = useHistory();

    const classes = useStyles();

    const updateBoard = () => {
        let updatedTitle = document.getElementById("updatedTitle").value;
        let updatedInner = document.getElementById("updatedInner").value;

        (async () => {
            const res = await axios.get('/api/updateBoard', {
                params: {
                    boardSeq: boardSeq,
                    boardTitle: updatedTitle,
                    boardInner: updatedInner,
                }
            });
            console.log(res);
        })()

        history.push({
            pathname: "/boardDetail",
            state: {
                boardSeq: boardSeq,
            }
        })
    }

    return(
        <div className={classes.root}>
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}><input type="text" id="updatedTitle" defaultValue={boardTitle} size="98" ></input></Grid>
                        <Grid item xs={3}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}><textarea cols="100" rows="30" defaultValue={boardInner} id="updatedInner"></textarea></Grid>
                        <Grid item xs={3}></Grid>

                        <Grid item xs={8}></Grid>
                        <Grid item xs={1}><Button variant="contained" className="buttonUpdate" onClick={updateBoard}>수정하기</Button></Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </>
        </div>
    );
}

export default BoardUpdate;