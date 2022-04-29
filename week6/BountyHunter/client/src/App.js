import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Recycle from './components/Recycle';
import AddItemForm from './components/AddItemFormHandler';

function App() {
  const [recycled, setRecycledItems] = useState([]);

  const getItems = () => {
    axios.get('/recycled')
      .then(res => setRecycledItems(res.data))
      .catch(err => console.log(err))
  };

  const addItems = (newItem) => {
    axios.post('/recycled', newItem)
      .then(res => {
        setRecycledItems(prevRecycled => [...prevRecycled, res.data])
      })
      .catch(err => console.log(err))
  };
  const deleteItem = (recycledId) => {
    axios.delete(`/recycled/${recycledId}`)
      .then(res => {
        setRecycledItems(prevRecycled => prevRecycled.filter(recycled => recycled._id !== recycledId))
      })
      .catch(err => console.log(err))
  }

  const editItem = (updates, recycledId) => {
    axios.put(`/recycled/${recycledId}`, updates)
      .then(res => {
        setRecycledItems(prevRecycled => prevRecycled.map(recycled => recycled._id !== recycledId ? recycled : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems();
  }, []);

  const recycledList = recycled.map(recycle => 
  <Recycle
  {...recycle} 
  deleteItem={deleteItem} 
  editItem={editItem} 
  key={recycle.name} />)

  return (
    <div className='recycled-container'>
      <AddItemForm 
      btnText='Recycle Item' 
      submit={addItems}/>
    {recycledList}
    </div>
  );
}

export default App;