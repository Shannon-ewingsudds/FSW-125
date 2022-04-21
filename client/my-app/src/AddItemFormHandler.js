import { useState } from 'react';

const AddItemFormHandler = ({name, descr, unitPrice, _id, btnText, submit}) => {
    const initialInputs = {name: name || '', descr: descr || '', unitPrice: unitPrice || ''}
    const [inputs, setInputs] = useState(initialInputs)


    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={inputs.name} onChange={handleChange} placeholder='Item Name...'/>
            <input type='text' name="descr" value={inputs.descr} onChange={handleChange} placeholder="Item Description..."/>
            <input type='text' name="unitPrice" value={inputs.unitPrice} onChange={handleChange} placeholder="Item Price..."/>
            <button className="add-item">{btnText}</button>
        </form>
    );
}

export default AddItemFormHandler;