import React, { useState } from 'react';
import {v4 as uuid} from "uuid";
import { DragDropContext } from 'react-beautiful-dnd';

// import DataApi from './data/dataApi';

import firebase from './firebase';

//Components
import Card from './Components/Card/Card';

export default function App() {

  const [data, setData] = useState();

  const ref = firebase.firestore().collection("lists");

  if (loading){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>Trello Clone</h2>
      <div className="myContainer">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
    
  )

}

