import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import InputContainer from '../Input/InputContainer';
import Title from './Title';
import Card from '../Card/Card';

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
        {list.cards.map((card) => {
          return <Card content={card.content} key={card.id}/>
        })}
        <InputContainer listid={list.id}/>
     </Paper>
    </div>
  );
}
