import React, {useContext, useEffect, useState} from "react";
import {Context as ProductsContext} from "../../context/productsContext";
import {Context as CartContext} from "../../context/cartContext";
import {useRouteMatch} from 'react-router-dom';

const ProductDetails = () => {
    const {state, loadProduct} = useContext(ProductsContext);
    const {addToCart, deleteProduct} = useContext(CartContext);
    const match = useRouteMatch();
    const [quantyti, setQuantyti] = useState(1);
    const [image, setImage] = useState('');

    useEffect(() => {
        loadProduct(match.params.id)
        setImage('')
    }, [match]);
    useEffect(() => {
        setTimeout(() => {
            setImage(state.product.images[0])
        }, 100)
    }, [match, state.product.images])

    if(state.product.length < 1) {
       return null;
    }
    return (
    <>
        <div className="product-details">
            <div className="product-details__img-box">
                <img src={image} alt="" className="product-details__img"/>
                <div className="product-details__img-box-carousel">
                    {state.product.images && state.product.images.map((image, index) => {
                        return <img
                                    className='product-details__img-box-carousel-item'
                                    src={image} alt=""
                                    key={index}
                                    onClick={() => setImage(image)}
                        />
                    })}
                </div>
            </div>
            <div className="product-details__info-box">
                <h3 className="product-details__title-heading">
                    {state.product.title}
                </h3>
                <span className="product-details__price">
                       $ {state.product.price}
                   </span>
                <span className="product-details__description-title">
                       Description
                   </span>
                <p className='product-details__description'>
                    {state.product.description}
                </p>
                <div className="product-details__cta-cart">
                    <input
                        type="number"
                        className="product-details__cta-cart-input"
                        value={quantyti}
                        onChange={e => setQuantyti(e.target.value)}
                    />
                    <button onClick={() => addToCart(state.product)} className="product-details__cta-cart-btn">Add to
                        cart
                    </button>
                </div>
            </div>
        </div>
    </>
    );
}

export default ProductDetails;