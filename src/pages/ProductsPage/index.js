import React, {useEffect, useContext, useState, useRef, useCallback} from "react";
import {useRouteMatch} from 'react-router-dom';
import {Context as ProductsContext} from "../../context/productsContext";
import Product from "../../components/Product";
import Filter from "../../components/Filter";
import { FiChevronUp, FiFilter } from "react-icons/fi";

const ProductsPage = ({path, url}) => {
    const match = useRouteMatch();
    const {state, loadProducts} = useContext(ProductsContext);
    const [offset, setOffset] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000)
    const [visible, setVisible] = useState(false)
    const [active, setActive] = useState(false);
    let categorie = match.url.replace('/', '')
    console.log(categorie)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300) {
            setVisible(true)
        } else if(scrolled <= 300) {
            setVisible(false)
        }
    }

    const handleActive = () => {
        if(active === false) {
            setActive(true)
        } else if(active === true) {
            setActive(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = (e) => {
        if(window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight - 400) {
            setOffset(offset + 15)
        }
    }

    useEffect(() => {
        loadProducts(offset);
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('scroll', toggleVisible)
    }, [offset])

    return (
        <>
            {state.products && <div className="products" id='test'>
                <div className="products__filter">
                    <Filter active={active} setMinPrice={setMinPrice} minPrice={minPrice} setMaxPrice={setMaxPrice} maxPrice={maxPrice}/>
                    <div className={`products__filter-icon-box ${active ? 'active' : ''}`} onClick={() => handleActive()}>
                        <FiFilter className='products__filter-icon'/>
                    </div>
                </div>
                <div className="products__products-list">
                    {state.products.filter(item => item.price >= minPrice && item.price <= maxPrice).filter(item => item.category.name.toLowerCase() === categorie).map((product, index) => {
                            return <Product
                                key={index}
                                title={product.title}
                                price={product.price}
                                images={product.images}
                                id={product.id}
                                product={product}
                                />
                    })}
                    <button style={{display: visible ? 'inline' : 'none'}} className='scroll-btn' onClick={scrollToTop}><FiChevronUp className='scroll-btn-icon'/></button>
                </div>
            </div>}
        </>
    );
}

export default ProductsPage;