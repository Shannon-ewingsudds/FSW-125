import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import RecycledItem from '../../week5/client/src/components/Recycle';
import AddItemFormHandler from '../../week5/client/src/components/AddItemForm';

function App() {
  const [recycledItemsList, setRecycledItems] = useState([]);

  const getItems = () => {
    axios.get('/items')
      .then(res => setRecycledItems(res.data))
      .catch(err => console.log(err))
  };

  const addItems = (newItem) => {
    axios.post('/items', newItem)
      .then(res => setRecycledItems(prevItems => [...prevItems, res.data]))
      .catch(err => console.log(err))
  };
  const deleteItem = (itemId) => {
    axios.delete(`/items/${itemId}`)
      .then(res => {
        setRecycledItems(prevItems => prevItems.filter(item => item._id !== itemId))
      })
      .catch(err => console.log(err))
  }

  const editItem = (updates, itemId) => {
    axios.put(`/items/${itemId}`, updates)
      .then(res => {
        setRecycledItems(prevItems => prevItems.map(item => item._id !== itemId ? item : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems();
  }, []);

  const recycledList = recycledItemsList.map(item => 
  <RecycledItem 
  {...item} 
  deleteItem={deleteItem} 
  editItem={editItem} 
  key={item.name} />)

  return (
    <div className='items-container'>
      <AddItemFormHandler 
      btnText='Recycle Item' 
      submit={addItems}/>
    {recycledList}
    </div>
  );
}

export default App;