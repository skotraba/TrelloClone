import React, { useContext, useState } from 'react';
import { Input, Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
// import {makeStyles, withStyles} from '@material-ui/core/styles'

import dataApi from '../../dataApi';


export default function InputGet(props) 
{

  const {addCardItem} = useContext(dataApi)
  const [content, setContent] = useState('')

  const handleBtnConfirm = (e) => {
    console.log(content)
    addCardItem(content, props.listIndex)
    props.setOpen(false);
    setContent('')
  }

  const handleContent = (e) => {
    setContent(e);
  }

  return (
    <div>
      <Input className="input"
      fullWidth
      multiline
      value={content}
      rows={4}
      variant="filled"
      inputProps={{
        className: 'myInput'
      }}
      placeholder="Enter Text Here"
      // onChange={((e) => console.log(e.target.value))}
      onChange={(e) => {
        handleContent(e.target.value)
        }}
      >
      </Input>
      <Button
        onClick={handleBtnConfirm}
      ><Add/>Add Card</Button>
      
    </div>
  );
}
