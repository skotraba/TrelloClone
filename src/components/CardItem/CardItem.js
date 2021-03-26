import React, {useContext} from 'react';
import ClearIcon from '@material-ui/icons/Clear';

import dataApi from '../../dataApi';
import { Draggable } from 'react-beautiful-dnd';

export default function CardItem(props) {

  const {addCardItem, removeCardItem} = useContext(dataApi);

  const btnHandler = () => {
    removeCardItem(props.listIndex, props.cardIndex)
  }

  return (
    <Draggable draggableId={props.cardIndex} key={props.cardIndex} index={props.cardIndex}>
      {
        (provided) => (
          <div 
          {...provided.draggableProps} {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="cardItem">
            <div className="cardItem__text">{props.content} </div>
            <div><ClearIcon onClick={btnHandler} className="cardItem__icon"/></div>
          </div>
        )
      }
     
    </Draggable>
   
  );
}
