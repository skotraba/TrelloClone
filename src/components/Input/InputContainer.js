import React, { useState } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Typography, Paper, Collapse } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
import Input from './Input';



const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0 , 1, 1, 1),
    background: '#AEA3B0',
    '&:hover': {
      backgroundColor: fade('#E3D0D8', 0.25)
    }

  },

}));


function InputContainer(props) {

  const classes=useStyle();

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Input setOpen={setOpen} listid={props.listid} />
      </Collapse>
      <Collapse in={!open}>
        <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)}>
          <Typography>
            {/* <Fab color="secondary" aria-label="add" >
              <AddIcon fontSize='small' />
            </Fab> */}
            + Add Card
          </Typography>
        </Paper>
      </Collapse>
      
    </div>
  );
}

export default InputContainer;