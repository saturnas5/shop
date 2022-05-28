import React from "react";
import InputDebounce from "../InputDebounce";

const SearchInput = () => {

    function test(val) {
        console.log(val)
    }

    return <InputDebounce onChange={test} className='header__search-input' type="text" placeholder='Search'/>
}

export default SearchInput;