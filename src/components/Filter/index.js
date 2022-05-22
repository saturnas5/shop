import React, {useContext} from "react";
import {Context as ProductsContext} from "../../context/productsContext";
import SortItems from "../../Utils/utils";

const Filter = () => {
    const {state, sortByPrice} = useContext(ProductsContext);



    return (
        <>
            <div className="filter">
                <label htmlFor="">
                    Sort by:
                <select name="" id="" onChange={(e) => sortByPrice(e.target.value)}>
                    <option>Select option</option>
                    <option value="sortDescending">Price Descending</option>
                    <option value="sortAscending">Price Ascending</option>
                </select>
                </label>
            </div>
        </>
    )
}

export default Filter;