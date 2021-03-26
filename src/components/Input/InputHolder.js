import React, {useState} from 'react';

import { Button, Collapse } from '@material-ui/core';

//Components
import InputGet from './InputGet';

//CSS
import './Input.scss';

export default function InputHolder(props) {

  const [open, setOpen ] = useState(false)

  const btnHandler = () => {
    setOpen(!open);
    const inputs = document.querySelectorAll(".myInput");
    let stuff = Array.from(inputs)
    stuff[0].focus();
  }

  return (
    <div className="test">
      <Collapse in={open}>
        <InputGet listIndex={props.listIndex} setOpen={setOpen}></InputGet>
        {/* <Button 
        className="myBtn"
         size="medium" 
         variant="contained"
         onClick={(() => setOpen(!open))}
         >Add Card</Button> */}
      </Collapse>
      <Collapse in={!open}>
      <Button 
        className="myBtn"
         size="medium" 
         variant="contained"
         onClick={btnHandler}
         >Add Card</Button>
      </Collapse>

    </div>
  )
}
