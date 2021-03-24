import React from 'react';
import {Paper} from '@material-ui/core';

//Components
import CardItem from '../CardItem/CardItem';
import Input from '../Input/Input';

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
        <Input className="card__input"/>
      </div>
    </Paper>
  
  );
}
