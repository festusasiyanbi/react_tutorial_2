import './App';
import ItemList from './ItemList';


const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            {items.length ? (
                <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: "20rem" }}>Your list is empty.</p>
            )}
        </>
    )
}

export default Content;
