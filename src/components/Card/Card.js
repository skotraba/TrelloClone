import React from 'react';
import {Paper} from '@material-ui/core';

//Components
import CardItem from '../CardItem/CardItem';
import InputHolder from '../Input/InputHolder';

//Sass/Css
import './Card.scss';

// export default function Card(props) {
//   return (
//     <Paper className="card">
//       <h3 className="card__title">{props.name}</h3>
//       <div className="card__scrollable">
//         <CardItem className="card__heading" id={props.id}></CardItem>
//         <InputHolder className="card__input"/>
//       </div>
//     </Paper>
  
//   );
// }


export default function Card(props) {
  return (
    <Paper className="card">
      <h3 className="card__title">{props.name}</h3>
      <div className="card__scrollable">
       {props.cards.map((info, index) => (
         <CardItem 
         className="card__heading" 
         id={index} 
         content={info}></CardItem>
       ))}
       <InputHolder className="card__input"/>
      </div>
    </Paper>
  
  );
}
