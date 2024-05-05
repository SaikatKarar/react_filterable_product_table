import React from 'react'

function SearchBar({ searchText, inStockOnly, onSearchTextChange, onInStockChange }) {
    return (
        <form>
            <input
                type="text"
                placeholder='Search...'
                value={searchText}
                onChange={(e) => onSearchTextChange(e.target.value)} />
            <div>
                <input
                    type="checkbox"
                    name=""
                    id="checkbox"
                    value={inStockOnly}
                    onChange={(e) => onInStockChange(e.target.checked)} />
                <label htmlFor="checkbox">Show Only inStock</label>
            </div>
        </form>
    )
}

export default SearchBar