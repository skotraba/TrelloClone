import React from 'react';
import {Paper} from '@material-ui/core';

//Components
import CardItem from '../CardItem/CardItem';
import InputHolder from '../Input/InputHolder';

//Sass/Css
import './Card.scss';

export default function Card(props) {
  return (
    <Paper className="card">
        <h3 className="card__title">To Do List</h3>
      
      <div className="card__scrollable">
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <CardItem className="card__heading"></CardItem>
        <InputHolder className="card__input"/>
      </div>
    </Paper>
  
  );
}
