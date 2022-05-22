import React, {useEffect, useContext, useState} from "react";
import {useRouteMatch} from 'react-router-dom';
import {Context as ProductsContext} from "../../context/productsContext";
import Product from "../../components/Product";
import Filter from "../../components/Filter";

const ProductsPage = ({path, url}) => {
    const match = useRouteMatch();
    const {state, loadProducts} = useContext(ProductsContext);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000)

    useEffect(() => {
        loadProducts();
    }, [])

    return (
        <>
            {state.products && <div className="products">
                <div className="products__filter">
                    <Filter setMinPrice={setMinPrice} minPrice={minPrice} setMaxPrice={setMaxPrice} maxPrice={maxPrice}/>
                </div>
                <div className="products__products-list">
                    {state.products.filter(item => item.price >= minPrice && item.price <= maxPrice).map(product => {
                        return <Product
                            key={product.id}
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