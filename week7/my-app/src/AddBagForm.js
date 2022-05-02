import { useState } from 'react';

function AddBagForm({ addBag, btnText, color, year, founder, model, material, price, sizes, _id }) {

    const initialInputs = { 
        year: year || '', 
        founder: founder || '', 
        model: model || '',
        material: material || '',
        color: color || '',
        price: price || '',
        sizes: sizes || ''
    };

    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({...prevInputs, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBag(inputs, _id);
        setInputs(initialInputs);
    }
    return (
        <>
        <form className = 'add-form' onSubmit = {handleSubmit}>
            <input className = 'inputs'
                type='text'
                name='year'
                value={inputs.year}
                onChange={handleChange}
                placeholder='Year of Bag'
                required />
            <input className = 'inputs'
                type='text'
                name='founder'
                value={inputs.founder}
                onChange={handleChange}
                placeholder='Founder of Bag'
                required />
            <input className = 'inputs'
                type='text'
                name='model'
                value={inputs.model}
                onChange={handleChange}
                placeholder='Model of Bag'
                required />
            <input className = 'inputs'
                type='text'
                name='material'
                value={inputs.material}
                onChange={handleChange}
                placeholder='Material of Bag'
                required />
            <input className = 'inputs'
                type='text'
                name='color'
                value={inputs.color}
                onChange={handleChange}
                placeholder='Color of Bag'
                required />
            <input className = 'inputs'
                type='text'
                name='price'
                value={inputs.price}
                onChange={handleChange}
                placeholder='Price of Bag'
                required />
            <input className = 'inputs'
                type='text'
                name='sizes'
                value={inputs.sizes}
                onChange={handleChange}
                placeholder='Sizes of Bag'
                required />
            <button className = 'submit-button'>{btnText}</button>
        </form>
        </>
    );
};

export default AddBagForm;