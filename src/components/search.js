const Search = ({search}) => {
    
    return (
        <div className='search'>
            <input onChange={e=>search(e)} type="search" name='search' id='search' placeholder='Search for a country'/>
        </div>
    )
}
export default Search; 
