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




export default function Card(props) {

  const {removeList} = useContext(dataApi);

  const handleBtn = (lindex) => {
    removeList(lindex);
  }

  return (
    <Paper className="card">
      <div className="card__header">
        <h3 className="card__title">{props.name}</h3>
        <ClearIcon 
        className="card__titleBtn"
        onClick={() => handleBtn(props.index)}
        />
      </div>
      <div className="card__scrollable">
       {props.cards.map((info, index) => (
         <CardItem 
         className="card__heading" 
         cardIndex={index} 
         listIndex={props.index}
         content={info}></CardItem>
       ))}
       <InputHolder className="card__input" listIndex={props.index}/>
      </div>
    </Paper>
  
  );
}
