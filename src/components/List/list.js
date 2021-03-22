import React from 'react';
import { Paper, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import InputContainer from '../Input/InputContainer';
import Title from './Title';
import Card from '../Card/Card';

const useStyle = makeStyles((theme) => ({
  root: {
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
        <Title title={list.title}/>
        {list.cards.map((card) => {
          return <Card content={card.title} key={card.id}/>
        })}
        <InputContainer/>
     </Paper>
    </div>
  );
}
