import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');  // set the type of requested data
  const [items, setItems] = useState([]);  // items which are gotten from server

  useEffect(() => {  // call the useEffect any time reqType state changes
  
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }  
    }

    fetchItems();
  }, [reqType])

  return (
    <div className="App">
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />
      <List 
        items={items}
      />
    </div>
  );
}

export default App;
