import React, { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid";
import { DragDropContext } from 'react-beautiful-dnd';
import DataApi from './dataApi';
import firebase from './firebase';

// import {Button} from '@material-ui/core';

//Components
import Card from './Components/Card/Card';
import InputAddList from './Components/Input/InputAddList';
import Spinner from './Components/spinner/Spinner';


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
    return <Spinner/>
  }

  //Data Api Updating Cards
   const addCardItem = ((content, index) => {

    let newCardItem = data[index];
    const newCardId = uuid();
    // let newcardlist = [...newCardItem.cardItems, content]
    // newCardItem.cardItems = newcardlist

    let listToAdd = data[index];
    const newCard = {
      id: newCardId,
      content: content
    }
    let newcardlist = [...listToAdd.cardItems, newCard]


    const newData = [
      ...data,
    ]
    newData[index].cardItems = newcardlist
    setData(newData)

    ref.doc(newCardItem.id).set(newCardItem);

   })

   const removeCardItem = ((lindex, cindex) => {
     console.log(lindex, cindex)
     let newData = [...data]
    //  newData[lindex].cardItems.pop(cindex);
    newData[lindex].cardItems.splice(cindex, 1);
    
     setData(newData);

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


  //Drag and Drop
  const handleDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    if(!destination) return;
    

    const sourceList = data.filter((list) => 
    list.id === source.droppableId)[0];
    const destinationList = data.filter((list) => 
    list.id === destination.droppableId)[0];


    const draggingCard = sourceList.cardItems.filter((card) => card.id === draggableId)[0];

      sourceList.cardItems.splice(source.index, 1);
      destinationList.cardItems.splice(destination.index, 0, draggingCard);
      
    ref.doc(sourceList.id).set(sourceList);
    ref.doc(destinationList.id).set(destinationList);

  }



  return (
    <div>
      <h2>Trello Clone</h2>
      <DataApi.Provider value={{addCardItem, removeCardItem, addList, removeList}}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="myContainer">
            {data.map((list, index) => 
            (
              <Card
                key={list.id}
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

// {data.map((list, index) => {
//   console.log(list, index)
//   list.cardItems.map((card, oindex) => {
//     console.log(card, oindex)
//   })
// })}

