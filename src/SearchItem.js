import './App' 

const SearchItem = ({ search, setSearch }) => {
  return (
    <form id='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search"> Search </label>
        <input
            type="text"
            placeholder='Search Item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        
        />
    </form>
  );
}

export default SearchItem;
