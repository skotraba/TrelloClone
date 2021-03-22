import React, { useContext, useState } from 'react';
import { Typography, InputBase, Paper, Button, IconButton } from '@material-ui/core';
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

export default function Input({ setOpen }) {

  const {addCard} = useContext(dataApi)
  const classes = useStyle();
  const [ cardContent, setCardContent ] = useState('');
  
  const onChangeHandler = (e) => {
    setCardContent(e.target.value);
  }

  const handleBtnConfirm = () => {
    addCard(cardContent);
    setOpen(false);
  }

  return (
    <div>
      <div >
        <Paper className={classes.card}>
          <InputBase 
          onChange={onChangeHandler}
          onBlur={() => setOpen(false)} 
          placeholder="Enter text here" 
          multiline 
          value = {cardContent}
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
          onClick={handleBtnConfirm}>Add Card</Button>
        <IconButton>
          <ClearIcon 
          onClick={() => setOpen(false)}/>
        </IconButton>
      </div>
    </div>
    
  );
}