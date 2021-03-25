import React from 'react';

import { Button, Collapse } from '@material-ui/core';

//Components
import InputGet from './InputGet';

//CSS
import '../Card/Card.scss';

export default function InputHolder(props) {
  return (
    <div className="test">
      <Button className="myBtn" size="medium" variant="contained">Add Card</Button>
      <InputGet></InputGet>
    </div>
  );
}
