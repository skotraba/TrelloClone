import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import InputContainer from '../Input/InputContainer';
import Title from './Title';
import Card from '../Card/Card';
import { Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    width: '300px',
    backgroundColor: '#ddd',
    marginLeft: theme.spacing(1),
    
  },
 
}));


export default function List({ list }) {

  const classes = useStyle();
  

  return (
    <div >
      <Paper className={classes.root}>
        <CssBaseline/>
        <Title title={list.title} listid={list.id}/>
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
                {list.cards.map((card, index) => {
                  return <Card content={card.content} id={card.id} index={index}/>
                })}
                {provided.placeholder}
            </div>
          )}
        </Droppable>
        <InputContainer listid={list.id}/>
     </Paper>
    </div>
  );
}
