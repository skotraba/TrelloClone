import React, { useState } from 'react';
import {v4 as uuid} from "uuid";
import { DragDropContext } from 'react-beautiful-dnd';

// import DataApi from './data/dataApi';

//Components
import Card from './Components/Card/Card';

export default function App() {
  return (
    <div className="myContainer">
      <Card/>
      <Card/>
      <Card/>
    </div>
  )

}

