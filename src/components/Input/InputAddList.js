
import React, { useContext, useState } from 'react';
import { Input, Button, Paper } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
// import {makeStyles, withStyles} from '@material-ui/core/styles'

import dataApi from '../../dataApi';

export default function InputAddList(props) {

  const [content, setContent] = useState('')

  const {addList} = useContext(dataApi);

  const handleBtn = () => {
    // console.log(content)
    addList(content)
    setContent('')
  }

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      handleChange(e);
      handleBtn();
    }
  }

  return (
    <div className="addList">
      <Input className="addList__input"
      onKeyPress={handleKeyPress}
      fullWidth
      multiline
      value={content}
      rows={4}
      variant="filled"
      inputProps={{
        className: 'myInput'
      }}
      placeholder="Enter Title Here"
      onChange={(e) => handleChange(e)}
      >
      </Input>
      <Button
      className="addList__btn"
      onClick={handleBtn}
      ><Add/>Add List</Button>
      
    </div>
  );
}
