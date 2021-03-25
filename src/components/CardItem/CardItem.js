import React, {useContext} from 'react';
import ClearIcon from '@material-ui/icons/Clear';

import dataApi from '../../dataApi';

export default function CardItem(props) {

  const {addCardItem, removeCardItem} = useContext(dataApi);

  const btnHandler = () => {
    removeCardItem(props.listIndex, props.cardIndex)
  }

  return (
    <div className="cardItem">
      <div className="cardItem__text">{props.content} </div>
      <div><ClearIcon onClick={btnHandler} className="cardItem__icon"/></div>
    </div>
  );
}
