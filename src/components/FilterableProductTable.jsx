import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function FilterableProductTable({ products }) {
    const [searchText, setSearchText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <>
            <SearchBar
                searchText={searchText}
                inStockOnly={inStockOnly}
                onSearchTextChange={setSearchText}
                onInStockChange={setInStockOnly} />
            <ProductTable
                searchText={searchText}
                inStockOnly={inStockOnly}
                products={products} />
        </>
    )
}

export default FilterableProductTable