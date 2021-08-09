import React, { useState } from 'react'

const AddItem = () => {
    const [fruit, setFruit] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')

    const onSubmit= (e) => {
        e.preventDefault()

        if (!fruit) {
        alert ('please add any item')
        return 
        }
    onAdd({fruit, price, quantity})

    setFruit('')
    setPrice('')
    setQuantity('')

    }

    return (
        <form className='add-form' onSubmit= {onSubmit} >
            <div className= 'form-control'>
                <label>Fruit</label>
                <input 
                    type='text' 
                    placeholder='Select the fruit' 
                    value={fruit}  
                    onChange={(e) => setFruit(e.target.value)} 
                />
            </div>
            <div className= 'form-control'>
                <label>Price</label>
                <input 
                    type='number' 
                    placeholder='Price' 
                    value={price}  
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className= 'form-control'>
                <label>Quantity in Kg</label>
                <input 
                    type='number' 
                    placeholder='select Kg' 
                    value={quantity}  
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
                <input type='submit' value='Add to Basket' 
                className='btn btn-block' />
        </form>
    )
}

export default AddItem
