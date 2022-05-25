import React, {useContext} from "react";
import {Link, useRouteMatch} from 'react-router-dom';
import {FiDollarSign, FiPackage} from "react-icons/fi";
import {Context as CartContext} from '../../context/cartContext';

const Product = ({title, images, price, id, product}) => {
    const {url} = useRouteMatch();
    const {addToCart} = useContext(CartContext)

    function trim(title) {
        return title.trim().replaceAll(' ', '-').toLowerCase();
    }

    return (
        <>
            <div className="product">
                <Link className='product__link' to={`${url}/${trim(title)}/${id}`}>
                <img className='product__img' src={images[0]} alt={title}/>
                <p className="product__name">{title}</p>
                <div className="product__info">
                    <p className='product__price'><FiDollarSign className='product__icon'/> {price}</p>
                    <p className='product__stock'><FiPackage className='product__icon'/> 10</p>
                </div>
                </Link>
                <button onClick={() => addToCart(product, 1)} className="product__btn">
                    Cart
                </button>
            </div>
        </>
    )
}

export default Product;