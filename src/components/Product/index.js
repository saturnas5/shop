import React from "react";
import {Link, useRouteMatch} from 'react-router-dom';
import {FiDollarSign, FiPackage} from "react-icons/fi";

const Product = ({title, images, price, id}) => {
    const {url} = useRouteMatch();

    function trim(title) {
        return title.trim().replaceAll(' ', '-').toLowerCase();
    }

    return (
        <>
            <div className="product">
                <Link to={`${url}/${trim(title)}/${id}`}>
                <img className='product__img' src={images[0]} alt={title}/>
                <p className="product__name">{title}</p>
                <div className="product__info">
                    <p className='product__price'><FiDollarSign className='product__icon'/> {price}</p>
                    <p className='product__stock'><FiPackage className='product__icon'/> 10</p>
                </div>
                </Link>
                <button className="product__btn">
                    Cart
                </button>
            </div>
        </>
    )
}

export default Product;