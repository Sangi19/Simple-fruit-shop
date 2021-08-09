import './App.css';
import { useState } from 'react';
import Header from './Header';
import Items from './Items';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        fruit: 'Apple',
        price: 200,
        quantity: 0,
    },
    {
        id: 2,
        fruit: 'Orange',
        price: 100,
        quantity: 0,
    },
    {
        id: 3,
        fruit: 'Banana',
        price: 20,
        quantity: 0,
    },
])

//Add Item
const addItem = (item) => {
  const id= Math.floor(Math.random() * 10000) +1
  const newTask= {id, ...item}
  setItem([...items, newItem])
}


//Delete Item
const deleteItem = (id) => {
  setItems(items.filter((task) => task.id !== id))
}

return (
    <div className="container">
     <Header />
     <AddItem onAdd={addItem} />
     {items.length > 0 ? (
      <Items items={items} onDelete={deleteItem} />
    ) : ('Please Fill your Fruit basket  by adding fruits')
    }
    </div>
  );
  }

export default App