import { useState } from 'react';
import AddItemFormHandler from "./AddItemFormHandler";
import { v4 as uuidv4 } from 'uuid';

function RecycledItem({name, editItem, description, price_per_unit, deleteItem, _id }) {

    const [editToggle, setEditToggle] = useState(false);
    
    return (
        <div className="item">
            { !editToggle ? 
                <>
                    <h1>Name: {name}</h1>
                    <h4>Description: {description}</h4>
                    <h4>Price {price_per_unit}</h4>
                    <button className='delete-btn' onClick={() => deleteItem(_id)} >Delete</button>
                    <button className="edit-btn">onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    Edit</button>
                </>
                :
                <>
                    <AddItemFormHandler
                    name={name}
                    description={description}
                    price={price_per_unit}
                    _id = {_id}
                    key={uuidv4()}
                    btnText='Edit Recycle'
                    submit={editItem} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                    
                </>
            }
        </div>
    );
}

export default RecycledItem;