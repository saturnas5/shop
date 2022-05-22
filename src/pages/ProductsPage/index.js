import React, {useEffect, useContext} from "react";
import {useRouteMatch} from 'react-router-dom';
import {Context as ProductsContext} from "../../context/productsContext";
import Product from "../../components/Product";

const ProductsPage = ({path, url}) => {
    const match = useRouteMatch();
    const {state, loadProducts} = useContext(ProductsContext);

    useEffect(() => {
        loadProducts();
    }, [])

    return (
        <>
            <div className="products">
                <div className="products__filter">
                    <div className="filter"></div>
                </div>
                <div className="products__products-list">
                    {state.products.map(product => {
                        return <Product
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            images={product.images}
                            id={product.id}
                        />
                    })}
                </div>
            </div>
        </>
    );
}

export default ProductsPage;