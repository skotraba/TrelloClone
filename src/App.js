import React, { useState } from 'react';
import {v4 as uuid} from "uuid";

import List from './components/List/list';
import myData from './data/data';

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

  return (
    <DataApi.Provider value={{ addCard }}>
      <div className="myContainer">
        {data.listIds.map((listId) => {
          const list = data.lists[listId]
          return <List list={list} key={listId}   />
        })}
      </div>
    </DataApi.Provider>
   
  );
}

export default App;
