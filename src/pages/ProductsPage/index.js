import React, {useEffect, useContext, useState, useRef, useCallback} from "react";
import {useRouteMatch} from 'react-router-dom';
import {Context as ProductsContext} from "../../context/productsContext";
import Product from "../../components/Product";
import Filter from "../../components/Filter";

const ProductsPage = ({path, url}) => {
    const match = useRouteMatch();
    const {state, loadProducts} = useContext(ProductsContext);
    const [offset, setOffset] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000)
    console.log(state)

    const handleScroll = (e) => {
        if(window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight - 400) {
            setOffset(offset + 15)
        }
    }

    useEffect(() => {
        setOffset(0)
    }, [match.url])
    console.log(match)


    useEffect(() => {
        loadProducts(offset);
        window.addEventListener('scroll', handleScroll)
    }, [offset])

    return (
        <>
            {state.products && <div className="products" id='test'>
                <div className="products__filter">
                    <Filter setMinPrice={setMinPrice} minPrice={minPrice} setMaxPrice={setMaxPrice} maxPrice={maxPrice}/>
                </div>
                <div className="products__products-list">
                    {state.products.filter(item => item.price >= minPrice && item.price <= maxPrice).map((product, index) => {
                            return <Product
                                key={index}
                                title={product.title}
                                price={product.price}
                                images={product.images}
                                id={product.id}
                                product={product}
                                />
                    })}
                </div>
            </div>}
        </>
    );
}

export default ProductsPage;