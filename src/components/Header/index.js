import React, {useContext, useEffect, useState} from "react";
import {NavLink, Link} from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import logo from '../../assets/img/logo.png';
import {Context as CartContext} from '../../context/cartContext';
import {Context as ProductsContext} from '../../context/productsContext'
import SearchInput from "../SearchInput";

const Header = () => {
    const {state} = useContext(CartContext);
    const {state: {categories}, getCategories} = useContext(ProductsContext)
    const [fixed, setFixed] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleFixed = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > document.querySelector('.header').clientHeight && document.body.offsetHeight > 1200) {
            setFixed(true)
            document.body.style = 'margin-top: 250px'
        } else if(scrolled <= document.querySelector('.header').clientHeight) {
            setFixed(false)
            document.body.style = 'margin-top: 0';
        }
    }

    const toggleOpen = () => {
        if(open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleFixed)
    }, [])

    useEffect(() => {
        getCategories()
    }, []);

    return (
        <>
            <header className={`header ${fixed ? 'fixed' : ''}`}>
                <div className="header__row header__row--1">
                    <div className="header__logo">
                        <Link to='/'><img src={logo} alt="" className="header__logo-img"/></Link>
                        <Link to='/' className='header__mobile-logo'>L</Link>
                    </div>
                    <div className="header__search">
                        <SearchInput/>
                        <Link className='header__cart-icon-link' to='/cart'><FiShoppingCart className='header__cart-icon'/>
                        {state.cart.length > 0 && <span className="header__cart-icon-label">{state.cart.length}</span>}
                        </Link>
                        <div className="mobile-nav">
                            <div className="mobile-nav__button" onClick={toggleOpen}>
                                <span className={`mobile-nav__icon ${open ? 'open' : ''}`}></span>
                            </div>
                            <div className={`mobile-nav__background ${open ? 'open' : ''}`}></div>
                            <nav className='mobile-nav__navigation'>
                                <ul className="mobile-nav__list">
                                    <li className="mobile-nav__item">
                                        <Link onClick={toggleOpen} className='mobile-nav__link' to='/'>Home</Link>
                                    </li>
                                    {categories.map(category => {
                                        return <li key={category.id} className="mobile-nav__item">
                                            <Link onClick={toggleOpen} className='mobile-nav__link' to={`/${category.name.toLowerCase()}`}>{category.name}</Link>
                                        </li>
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="header__row header__row--2">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/'>Home</NavLink>
                            </li>
                            {categories.map(category => {
                                return (
                                    <li key={category.id} className="header__nav-list-item">
                                        <NavLink activeClassName='active-link' className='header__nav-list-item-link' to={`/${category.name.toLowerCase()}`}>{category.name}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className="header__login">
                        <Link to='/login' className='header__login-link'><span>login</span></Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;