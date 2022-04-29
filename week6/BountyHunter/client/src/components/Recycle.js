import { useState } from 'react';
import AddItemForm from './AddItemFormHandler';


function Recycle({deleteItem, editItem, name, description, _id}) {
    const [editToggle, setEditToggle] = useState(false);
    return (
        <div className="item">
            { !editToggle ? 
                <>
                    <h1>Name: {name}</h1>
                    <p>Description: {description}</p>
                    <button 
                        onClick={() => deleteItem()} 
                        className='delete-btn'>
                        Delete
                    </button>
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                        className="edit-btn">
                        Edit
                    </button>
                </>
                :
                <>
                    <AddItemForm
                        name={name}
                        description={description}
                        _id={_id}   
                        btnText='Submit Edit'
                        submit={editItem} />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    );
}
export default Recycle;