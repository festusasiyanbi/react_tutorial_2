import './App';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form id='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem"> Add Item </label>
            <input 
                type="text"
                aria-label='Add Item'
                placeholder='Add Item'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button 
                onClick={handleSubmit}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
