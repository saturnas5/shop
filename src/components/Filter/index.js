import React, {useContext, useState, useEffect} from "react";
import {Context as ProductsContext} from "../../context/productsContext";
import SortItems from "../../Utils/utils";

const Filter = ({ setMaxPrice, setMinPrice }) => {
    const {state, sortByPrice} = useContext(ProductsContext);
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    useEffect(() => {
        setMin(Math.min(...state.products.map(prod => prod.price)))
        setMax(Math.max(...state.products.map(prod => prod.price)))
    }, [state])

    function handlePriceFilterSubmit(e) {
        e.preventDefault();
        setMinPrice(min);
        setMaxPrice(max);
    }

    return (
        <>
            <div className="filter">
                <select id='sort-select' className='filter__sort-select' onChange={(e) => sortByPrice(e.target.value)}>
                    <option>Select option</option>
                    <option value="sortDescending">Price Descending</option>
                    <option value="sortAscending">Price Ascending</option>
                </select>
                <label className='filter__sort-select-label' htmlFor='sort-select'>Sort by</label>
                <form className='filter__price-filter' onSubmit={e => handlePriceFilterSubmit(e)}>
                    <input className='filter__min-price-input' value={min} onChange={e => setMin(e.target.value)} type="number" id='min-price'/>
                    <label className='filter__min-price-label' htmlFor="min-price">Min</label>
                    <div className="filter__price-separator"></div>
                    <input className='filter__max-price-input' value={max} onChange={e => setMax(e.target.value)} type="number" id='max-price'/>
                    <label className='filter__max-price-label' htmlFor="max-price">Max</label>
                    <input className='filter__price-filter-btn' type="submit" value='Filter'/>
                </form>
            </div>
        </>
    )
}

export default Filter;