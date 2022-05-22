import React, {useContext, useState, useEffect} from "react";
import {Context as ProductsContext} from "../../context/productsContext";
import SortItems from "../../Utils/utils";

const Filter = ({onFilter, setMaxPrice, setMinPrice}) => {
    const {state, loadProduct, sortByPrice, filterByPrice} = useContext(ProductsContext);
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    useEffect(() => {
        setMin(Math.min(...state.products.map(prod => prod.price)))
        setMax(Math.max(...state.products.map(prod => prod.price)))
    }, [])

    function handlePriceFilterSubmit(e) {
        e.preventDefault();
        setMinPrice(min);
        setMaxPrice(max);
    }

    return (
        <>
            <div className="filter">
                <label>
                    Sort by:
                <select onChange={(e) => sortByPrice(e.target.value)}>
                    <option>Select option</option>
                    <option value="sortDescending">Price Descending</option>
                    <option value="sortAscending">Price Ascending</option>
                </select>
                </label>
                <form onSubmit={e => handlePriceFilterSubmit(e)}>
                    <input value={min} onChange={e => setMin(e.target.value)} type="number"/>
                    <input value={max} onChange={e => setMax(e.target.value)} type="number"/>
                    <input type="submit" value='Filter'/>
                </form>
            </div>
        </>
    )
}

export default Filter;