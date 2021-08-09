import { FaTimes } from 'react-icons/fa';

const Item = ({item, onDelete}) => {
    return (
        <div className='item'>
                <h3>{item.fruit}</h3>
                <h3>{item.price} 
                <FaTimes 
                style={{ color: 'red', cursor:'pointer' }} 
                onClick= { () => onDelete(item.id) }
                /> 
                </h3>
        </div>
    )
}

export default Item
