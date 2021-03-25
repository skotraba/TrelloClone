import React, { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid";
import { DragDropContext } from 'react-beautiful-dnd';

// import DataApi from './data/dataApi';

import firebase from './firebase';

//Components
import Card from './Components/Card/Card';

export default function App() {

  // let newdata = [
  //   {
  //   id: 123,
  //   name: 'List1',
  //   cards: ['do something', 'do something else']
  //   },
  // ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("lists");

  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      })
      setData(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data)

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>Trello Clone</h2>
      <div className="myContainer">
        {data.map((list) => (
          <Card
            id={list.id}
            name={list.name}
            cards={list.cardItems}
          />
        ))}
      </div>
    </div>
    
  )

}

