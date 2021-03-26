import React, {useContext} from 'react';
import {Paper} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

//Data
import dataApi from '../../dataApi';

//Components
import CardItem from '../CardItem/CardItem';
import InputHolder from '../Input/InputHolder';

//Sass/Css
import './Card.scss';
import { Draggable, Droppable } from 'react-beautiful-dnd';




export default function Card(props) {

  const {removeList} = useContext(dataApi);

  const handleBtn = (lindex) => {
    removeList(lindex);
  }
  // console.log(typeof(props.index))

  return (
    <Paper className="card">
      <div className="card__header">
        <h3 className="card__title">{props.name}</h3>
        <ClearIcon 
        className="card__titleBtn"
        onClick={() => handleBtn(props.index)}
        />
      </div>
      <Droppable droppableId={props.id}>
        {
          (provided) => (
            <div 
            className="card__scrollable"
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {props.cards.map((card, index) => (
              <CardItem 
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              key={card.id}
              className="card__heading" 
              cardIndex={index} 
              listIndex={props.index}
              content={card.content}
              cardId={card.id}>

              </CardItem>
            ))}
            {provided.placeholder}
            <InputHolder className="card__input" listIndex={props.index}/>
            
          </div>
          )
          
        }
      </Droppable>
     
    </Paper>
  );
}

// {...provided.draggableProps} {...provided.dragHandleProps}
//     ref={provided.innerRef}
