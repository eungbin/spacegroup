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

function WriteBoard() {
    let history = useHistory();

    const classes = useStyles();

    const writeBoard = () => {
        let writeTitle = document.getElementById("writeTitle").value;
        let writeInner = document.getElementById("writeInner").value;

        (async () => {
            const res = await axios.get('/api/writeBoard', {
                params: {
                    boardTitle: writeTitle,
                    boardInner: writeInner,
                    userSeq: sessionStorage.getItem("userSeq"),
                }
            });
        })()

        history.push({
            pathname: "/community",
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

                        <Grid item xs={3}></Grid>
                        <Grid item xs={1}>제목</Grid>
                        <Grid item xs={8}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}><input type="text" id="writeTitle" size="98" ></input></Grid>
                        <Grid item xs={3}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={1}>본문</Grid>
                        <Grid item xs={8}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}><textarea cols="100" rows="30" id="writeInner"></textarea></Grid>
                        <Grid item xs={3}></Grid>

                        <Grid item xs={8}></Grid>
                        <Grid item xs={1}><Button variant="contained" className="buttonUpdate" onClick={writeBoard}>작성하기</Button></Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </>
        </div>
    );
}

export default WriteBoard;