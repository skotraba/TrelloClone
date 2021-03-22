import React, { useState } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((theme) => ({
  
  editableTitle: {
    margin: theme.spacing(1),
    display: 'flex',
    fontSize: "1.2rem",
  },
  editables: {
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: "1.3rem",
  },
  input: {
    margin: theme.spacing(1),
    "&:focus": {
      background:"#fff",
    }
  }
}));

function Title(props) {

  const [open, setOpened] = useState(false);
  const classes = useStyle();

  return (
    <div>
      {
        open ? (
        <div>
          <InputBase 
          autoFocus
          // value="Todo"
          inputProps={{
            className: classes.input,
          }}
          fullWidth
          onBlur = {() => setOpened(!open)}>
            
          </InputBase>
        </div>
        ) : (
          <div className={classes.editableTitle}>
           <Typography className={classes.editables} onClick={() => setOpened(!open)}>{props.title}</Typography> 
           <MoreHorizIcon/>
          </div>
        )
      }
    </div>
  );
}

export default Title;
