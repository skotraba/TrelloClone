import React, { useState } from 'react';

import List from './components/List/list';
import myData from './data/data';

import DataApi from './data/dataApi';

function App() {

  const [data, setData] = useState(myData);
  const addCard = (title => {
    console.log(title);
  })

  return (
    <DataApi.Provider value={{ addCard }}>
      <div className="myContainer">
        {data.listIds.map((listId) => {
          const list = data.lists[listId]
          return <List list={list} key={listId} />
        })}
      </div>
    </DataApi.Provider>
   
  );
}

export default App;
