import React, { useContext, useState } from 'react';
import { InputBase, Paper, Button, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import dataApi from '../../data/dataApi';

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    marginTop: '2rem'
  },
  input: {
    margin: theme.spacing(4),
  },
  btnConfirm: {
    background: '#B5B682'
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  }

}));

export default function Input({ setOpen, listid, type }) {

  const {addCard, addList} = useContext(dataApi)
  const classes = useStyle();

  // State
  const [ content, setContent ] = useState('');
  
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  }

  const handleBtnConfirm = () => {

    if(type === 'list'){
      console.log("I'm a list")
      addList(content);
      setContent('')
      setOpen(false);
    }
    else {
      if(content !== ""){
        addCard(content, listid);
      }
      setOpen(false);
      setContent("")
    }

    
  }

  // const handleBlur = () => {
  //   setOpen(false);
  //   setCardContent("");
  // }

  return (
    <div>
      <div >
        <Paper className={classes.card}>
          <InputBase 
          onChange={onChangeHandler}
          onBlur={handleBtnConfirm} 
          placeholder={type == "list" ? "Enter title" : "Enter card text here"}
          multiline 
          value = {content}
          fullWidth 
          inputProps={{
            className: classes.input,
          }}>
          </InputBase>
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button 
          onClick={() => {
            setOpen(false);
            }} 
          className={classes.btnConfirm}
          onClick={handleBtnConfirm}>{type == 'list' ? "Add List" : "Add Card"}</Button>
        <IconButton>
          <ClearIcon 
          onClick={() => setOpen(false)}/>
        </IconButton>
      </div>
    </div>
    
  );
}