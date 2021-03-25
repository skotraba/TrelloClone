import React, { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid";
import { DragDropContext } from 'react-beautiful-dnd';
import DataApi from './dataApi';
import firebase from './firebase';

//Components
import Card from './Components/Card/Card';
import InputAddList from './Components/Input/InputAddList';


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

  //Data Api Updating Cards
   const addCardItem = ((content, index) => {

    let newCardItem = data[index];
    let newcardlist = [...newCardItem.cardItems, content]
    newCardItem.cardItems = newcardlist
    const newData = [
      ...data,
    ]
    newData[index] = newCardItem
    setData(newData)

    ref.doc(newCardItem.id).set(newCardItem);

   })

   const removeCardItem = ((lindex, cindex) => {
     console.log(lindex, cindex)
     let newData = [...data]
    //  newData[lindex].cardItems.pop(cindex);
    newData[lindex].cardItems.splice(cindex, 1);
    
     setData(newData);
     console.log(data);

     ref.doc(newData[lindex].id).set(newData[lindex])
   })


   //Data Api Updating Lists
   const addList = ((content) => {
     const newId = uuid();
     const newList = {
       id: newId,
       name: content,
       cardItems: []
     }

     const newData = [...data, newList];

     console.log(newData)
     ref.doc(newList.id).set(newList);
     setData(newData);

     

   })

   const removeList = ((lindex) => {
    let newData = [...data];
    console.log(newData);
    newData.splice(lindex, 1);
    console.log(newData)
    

    ref.doc(data[lindex].id).delete()

    setData(newData)

  })



  return (
    <div>
      <h2>Trello Clone</h2>
      <DataApi.Provider value={{addCardItem, removeCardItem, addList, removeList}}>
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
             <InputAddList/>
          </div>
        </DragDropContext>
       
      </DataApi.Provider>
    </div>
    
  )

}

