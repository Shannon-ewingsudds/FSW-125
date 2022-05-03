import { useState } from 'react';
import AddBagForm from './AddBagForm';

function Bags({bag, deleteBag, editBag}){

    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className = 'bag-wrapper'>
            { !editToggle ?
                <>
                    <h1 className = 'bag-title'> {bag.year} {bag.founder} {bag.model}</h1>
                    <div className = 'bag-sizes'>
                        <p>Color: {bag.color}</p>
                        <p>Material: {bag.material}</p>
                        <p>Sizes: {bag.sizes}</p>
                    </div>
                    <h3>Price: &#36;{bag.price}</h3>
                    <button 
                        onClick = {() => deleteBag(bag._id)} 
                        className = 'delete-button'>
                        Remove
                    </button>
                    <button
                        onClick = {() => setEditToggle((prevToggle) => !prevToggle)}
                        className = 'edit-button'>
                        Edit
                    </button>
                </>
                
                :

                <>
                    <AddBagForm 
                        year = {bag.year}
                        founder = {bag.founder}
                        model = {bag.model}
                        material = {bag.material}
                        color = {bag.color}
                        price = {bag.price}
                        sizes = {bag.sizes}
                        btnText = 'Submit'
                        addBag = {editBag}
                        _id = {bag._id}/> 
                        <button
                            onClick = {() => setEditToggle((prevToggle) => !prevToggle)}
                            className = 'close-button'>
                            Confirm Changes
                        </button>
                </>
            }
        </div>
    );
};

export default Bags;