import React, { useState } from 'react';
import {v4 as uuid} from "uuid";
import { DragDropContext } from 'react-beautiful-dnd';

import List from './components/List/list';
import myData from './data/data';
import InputContainer from './components/Input/InputContainer';

import DataApi from './data/dataApi';

function App() {

  const [data, setData] = useState(myData);

  const addCard = ((content, listid) => {
    // console.log(content, listid);
    const cardId = uuid();
    const newCard = {
      id: cardId,
      content: content
    };

    const list = data.lists[listid];
    list.cards = [...list.cards, newCard]

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listid]: list,
      },
    };
    
    // console.log(newState);
    setData(newState);

  })

  const addList = (title) => {
    const listId = uuid();
    const newList = {
      id: listId,
      title,
      cards: [],
    };

    const newState = {
      listIds: [... data.listIds, listId],
      lists: {
        ...data.lists,
        [listId]:newList
      }
    }

    setData(newState);
  }

  const updateListTitle = (title, listid) => {
    // console.log(title)
    const list = data.lists[listid];
    list.title = title;

    const newState = {
      ...data,
      list: {
        ...data.lists,
        [listid]:list
      }
    }
    setData(newState);
  }


  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    console.log(destination, source, draggableId)
    if(!destination) return;

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter((card) => card.id === draggableId )[0];

    if(source.droppableId === destination.droppableId){
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists:{
          ...data.lists,
          [sourceList.id]:destinationList
        }
      };


      setData(newState);

    }
  }

  return (
    <DataApi.Provider value={{ addCard, addList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="myContainer">
          <div className="myContainer">
            {data.listIds.map((listId) => {
              const list = data.lists[listId]
              return <List list={list} key={listId}   />
            })}
          </div>
          <InputContainer type="list"/>
        </div>
      </DragDropContext>
    </DataApi.Provider>
   
  );
}

export default App;
