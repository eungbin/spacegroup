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
    const [replyList, setReplyList] = useState([]);
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
        })();

        (async () => {
            const res = await axios.get('/api/getReplyList', {
                params: {
                    boardSeq: boardSeq,
                }
            });
            console.log(res);
            setReplyList(res.data);
        })();
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
        if(window.confirm("정말 삭제하시겠습니까?")) {
            (async () => {
                const res = await axios.get('/api/deleteBoard', {
                    params: {
                        boardSeq: boardSeq,
                    }
                });
                console.log(res);
            })();
    
            history.push({
                pathname: "/community",
            })
        }
    }

    const writeReply = () => {
        if(window.confirm("작성하시겠습니까?")) {
            let reply = document.getElementById("writeReply").value;
            (async () => {
                const res = await axios.get('/api/writeReply', {
                    params: {
                        boardSeq: boardSeq,
                        userSeq: sessionStorage.getItem("userSeq"),
                        replyText: reply,
                    }
                });

                (async () => {
                    const res = await axios.get('/api/getReplyList', {
                        params: {
                            boardSeq: boardSeq,
                        }
                    });
                    console.log(res);
                    setReplyList(res.data);
                })();
            })();

            document.getElementById("writeReply").value = "";
        }
    }

    const deleteReply = (e) => {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            let replySeq = e.target.id;
            (async () => {
                const res = await axios.get('/api/deleteReply', {
                    params: {
                        replySeq: replySeq,
                    }
                });

                (async () => {
                    const res = await axios.get('/api/getReplyList', {
                        params: {
                            boardSeq: boardSeq,
                        }
                    });
                    console.log(res);
                    setReplyList(res.data);
                })();
            })();
        }
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
                        <Grid item xs={2}>{String(moment(new Date(boardDetail[0].boardDate)).format("YYYY-MM-DD"))}</Grid>
                        <Grid item xs={2}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={6}><textarea cols="120" rows="30" readOnly value={boardDetail[0].boardInner}></textarea></Grid>
                        <Grid item xs={3}></Grid>

                        {parseInt(boardDetail[0].userSeq) === parseInt(sessionStorage.getItem("userSeq")) ? <><Grid item xs={8}></Grid>
                        <Grid item xs={1}><Button variant="contained" className="buttonUpdate" onClick={updateBoard}>수정하기</Button></Grid>
                        <Grid item xs={1}><Button variant="contained" className="buttonRemove" onClick={removeBoard}>삭제하기</Button></Grid>
                        <Grid item xs={2}></Grid></> : <></>}

                        <Grid item xs={12}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={7}><hr /></Grid>
                        <Grid item xs={2}></Grid>

                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}></Grid>
                        
                        <Grid item xs={3}></Grid>
                        <Grid item xs={5}><textarea cols="85" rows="5" id="writeReply"></textarea></Grid>
                        <Grid item xs={1}><Button variant="contained" className="buttonReply" onClick={writeReply}>작성하기</Button></Grid>
                        <Grid item xs={3}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={7}><hr /></Grid>
                        <Grid item xs={2}></Grid>

                        {replyList.length === 0 ? <h1>댓글없음</h1> : 
                            <>
                                {replyList.map(i => {
                                    return <>
                                        <Grid item xs={3}></Grid>
                                        <Grid item xs={1} className="replyWriter">{i.userNickName}</Grid>
                                        <Grid item xs={8}></Grid>

                                        <Grid item xs={3}></Grid>
                                        <Grid item xs={9} className="replyInner">{i.replyText}</Grid>

                                        <Grid item xs={3}></Grid>
                                        <Grid item xs={2} className="replyDate">{String(moment(new Date(i.replyDate)).format("YYYY-MM-DD"))}</Grid>
                                        <Grid item xs={2} className="replyDelete">
                                            {parseInt(i.userSeq) === parseInt(sessionStorage.getItem("userSeq")) ? <div onClick={deleteReply} id={i.replySeq}>삭제하기</div> : <></>}
                                        </Grid>
                                        <Grid item xs={5}></Grid>
                                    </>
                                })}
                            </>
                        }
                    </Grid>
                </>
            }
        </div>
    );
}

export default BoardDetail;