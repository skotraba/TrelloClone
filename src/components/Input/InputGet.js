import React from 'react';
import { Input } from '@material-ui/core';


import {makeStyles, withStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  }
}))






export default function InputGet(props) 
{

  const classes = styles();


  return (
    <div>
      <Input className="input"
      fullWidth
      multiline
      rows={4}
      variant="filled"
      inputProps={{
        className: 'myInput'
      }}
      placeholder="Enter Text Here">
      
      </Input>
      
    </div>
  );
}
