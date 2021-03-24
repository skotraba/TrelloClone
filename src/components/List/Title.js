import React, { useContext, useState } from 'react';
import { Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import dataApi from '../../data/dataApi';

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

function Title({ title, listid }) {

  const [open, setOpened] = useState(false);
  const classes = useStyle();
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(dataApi)

  const handleOnChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleBlur = () => {
    updateListTitle(newTitle, listid)
    setOpened(false)
    
  }

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
          onChange={handleOnChange}
          onBlur = {handleBlur}>  
          </InputBase>
        </div>
        ) : (
          <div className={classes.editableTitle}>
           <Typography className={classes.editables} onClick={() => setOpened(!open)}>{title}</Typography> 
           <MoreHorizIcon/>
          </div>
        )
      }
    </div>
  );
}

export default Title;
