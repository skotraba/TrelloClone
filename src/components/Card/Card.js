import React, {useContext, useState} from 'react';
import {Paper, Input} from '@material-ui/core';
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



  const {removeList, updateListTitle} = useContext(dataApi);
  const [title, setTitle] = useState(props.name);
  const [show, setShow] = useState(true);




  const handleBtn = (lindex) => {
    removeList(lindex);
  }

  const handleTitle = (e) => {
    setShow(false)
    setTitle(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.key === "Enter"){
      updateListTitle(e.target.value, props.index)
      setShow(true);
    }
  }

  return (
    <Paper className="card">
      <div className="card__header">
        {show ? <h3 onClick={handleTitle}>{props.name}</h3> : <Input 
        onBlur={() => setShow(true)}
        onKeyPress={handleKeyPress} 
        className="card__title">{props.name}</Input>}
        
        <ClearIcon 
        className="card__titleBtn"
        onClick={() => handleBtn(props.index)}
        />
      </div>
      <Droppable droppableId={props.id} >
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
