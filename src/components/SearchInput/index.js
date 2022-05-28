import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import InputDebounce from "../InputDebounce";
import {Context as ProductsContext} from '../../context/productsContext'

const SearchInput = () => {
    const {state: {products}} = useContext(ProductsContext)
    const [prod, setProd] = useState([])

    function trim(title) {
        return title.trim().replaceAll(' ', '-').toLowerCase();
    }

    function productsSearch(val) {
        let searchRes = [];
        for(let i = 0; i < products.length; i ++) {
            if(products[i].title.toLowerCase().trim().includes(val.trim().toLowerCase())) {
                searchRes.push(products[i])
            }
        }
        setProd(searchRes)
    }


    return (
        <div className='search-input'>
            <InputDebounce onChange={productsSearch} className='search-input__input' type="text" placeholder='Search'/>
            {prod.length > 0 && <div className="search-input__output">
                <ul className="search-input__list">
                    {prod.map((item, index) => {
                        return (
                            <li key={index} className="search-input__item">
                                <Link onClick={() => setProd([])} className="search-input__link" to={`/${item.category.name.toLowerCase()}/${trim(item.title)}/${item.id}`}>
                                    <img src={item.images[0]} alt={item.title} className="search-input__img"/>
                                    <span className="search-input__name">{item.title}</span>
                                    <span className="search-input__price">$ {item.price}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default SearchInput;