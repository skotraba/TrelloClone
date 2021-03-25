import React, {useState} from 'react';

import { Button, Collapse } from '@material-ui/core';

//Components
import InputGet from './InputGet';

//CSS
import '../Card/Card.scss';

export default function InputHolder(props) {

  const [open, setOpen ] = useState(false)

  // if(!open){
  //   return (
  //     <div className="test">
  //       <Collapse in={!open}>
  //        <Button className="myBtn" size="medium" variant="contained"
  //        onClick={(() => setOpen(true))}
  //        >Add Card</Button>
  //       </Collapse>
  //   </div>
  //   )
  // }

  // return (
  //   <div className="test">
  //     <Collapse in={open}>
  //       <Button 
  //       className="myBtn"
  //        size="medium" 
  //        variant="contained"
  //        onClick={(() => setOpen(!open))}
  //        >Add Card</Button>
  //       <Collapse in={open}>
  //         <InputGet/>
  //       </Collapse>
  //     </Collapse>
      
  //   </div>
  // );


  return (
    <div className="test">
      <Collapse in={open}>
        <InputGet setOpen={setOpen}></InputGet>
        <Button 
        className="myBtn"
         size="medium" 
         variant="contained"
         onClick={(() => setOpen(!open))}
         >Add Card</Button>
      </Collapse>
      <Collapse in={!open}>
      <Button 
        className="myBtn"
         size="medium" 
         variant="contained"
         onClick={(() => setOpen(!open))}
         >Add Card</Button>
      </Collapse>

    </div>
  )
}
