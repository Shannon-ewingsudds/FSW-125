import { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Bags from './Bags';
import AddbagForm from './AddBagForm';
import SearchBar from './SearchBar';

function App() {

  const [purse, setPurses] = useState([]);

  const getAllBags = () => {
    axios.get('http://localhost:9000/bags/all')
    .then((res) => setPurses(res.data))
    .catch((err) => console.warn(err))
  };

  const addNewBag = (newItem) => {
    axios.post('http://localhost:9000/bags/add', newItem)
      .then((res) => {
        setPurses((prevbags) => [...prevbags, res.data])
      })
      .catch((err) => console.warn(err))
  };

  const deleteBag = (bagid) => {
    axios.delete(`http://localhost:9000/bags/delete/${bagid}`)
      .then((res) => {
        setPurses((prevBags) => prevBags.filter((bag) => bag._id !== bagid));
      })
      .catch((err) => console.warn(err))
  };

  const editBag = (edits, bagid) => {
    axios.put(`http://localhost:9000/bags/edit/${bagid}`, edits)
      .then((res) => {
        setPurses((prevbags) => prevbags.map((bag) => bag._id !== bagid ? bag : res.data))
      })
      .catch((err) => console.warn(err))
  };

  useEffect(() => {
    getAllBags();
  }, []);

  const bags = purse.map((purse) => 
  <Bags 
    editBag = {editBag}
    deleteBag = {deleteBag} 
    bag = {purse} 
    key = {purse._id} />
  );

  const searchBags = (input) => {
    axios.get(`http://localhost:9000/bags/${input}`)
      .then((res) => {
        setPurses((prevBags) => prevBags.filter((bag) => bag.founder === input))
      })
      .catch((err) => console.warn(err))
  };

  return (
    <>
    <h1 className = 'header'>Purse Closet<style>
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');
</style> </h1>
    <div className='search'>
      <SearchBar searchBags = {searchBags}/>
    </div>
    <div className = 'add-bag-section'>
      <AddbagForm addBag = {addNewBag} btnText = 'Add bag'/>
    </div>
    <div className = 'bags'>{bags}</div>
    </>
  );
};

export default App;
