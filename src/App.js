import React, { useState, useEffect } from 'react';
// import {v4 as uuid} from "uuid";
import { DragDropContext } from 'react-beautiful-dnd';
import DataApi from './dataApi';
import firebase from './firebase';

//Components
import Card from './Components/Card/Card';



export default function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  //Firebase Connection
  const ref = firebase.firestore().collection("lists");

  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = []
      const ids = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        ids.push(doc.id)
      })
      const itemsIds = []
      for(let i = 0; i < items.length; i ++) {
        const id = ids[i]
        const item = {...items[i], id}
        itemsIds.push(item);
      }
      setData(itemsIds);
      setLoading(false);
    })
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  //Local Api Data
   const addCardItem = ((content, index) => {

    let newCardItem = data[index];
    let newcardlist = [...newCardItem.cardItems, content]
    newCardItem.cardItems = newcardlist
    const newData = [
      ...data,
    ]
    newData[index] = newCardItem
    console.log(newData)
    setData(newData)

    ref.doc(newCardItem.id).set(newCardItem);
    



   })



  return (
    <div>
      <h2>Trello Clone</h2>
      <DataApi.Provider value={{addCardItem}}>
        <DragDropContext>
          <div className="myContainer">
            {data.map((list, index) => 
            (
              <Card
                index={index}
                id={list.id}
                name={list.name}
                cards={list.cardItems}
              />
            ))}
          </div>
        </DragDropContext>
      </DataApi.Provider>
    </div>
    
  )

}

