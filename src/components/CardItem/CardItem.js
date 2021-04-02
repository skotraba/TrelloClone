import React, {useContext} from 'react';
import ClearIcon from '@material-ui/icons/Clear';

import dataApi from '../../dataApi';
import { Draggable } from 'react-beautiful-dnd';

import Order from '../Order/Order';

export default function CardItem(props) {

  const {addCardItem, removeCardItem} = useContext(dataApi);

  const btnHandler = () => {
    removeCardItem(props.listIndex, props.cardIndex)
  }

  return (
    <Draggable key={props.cardId} draggableId={props.cardId} index={props.cardIndex}>
      {
        (provided) => (
          <div 
            className="cardItem"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}>
            <div className="cardItem__text">{props.content} </div>
                <div><ClearIcon onClick={btnHandler} className="cardItem__icon"/>
                <Order content={props.content} cardIndex={props.cardIndex} listIndex={props.listIndex} />
                </div>
           
          </div>
        )
      }
     
    </Draggable>
   
  );
}


