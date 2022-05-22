import React, {useContext} from "react";
import {NavLink, Link} from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import logo from '../../assets/img/logo.png';
import {Context as CartContext} from '../../context/cartContext';

const Header = () => {
    const {state} = useContext(CartContext);
    console.log(state.cart)

    return (
        <>
            <header className='header'>
                <div className="header__row header__row--1">
                    <div className="header__logo">
                        <Link to='/'><img src={logo} alt="" className="header__logo-img"/></Link>
                    </div>
                    <div className="header__search">
                        <input className='header__search-input' type="text" placeholder='Search'/>
                        <FiShoppingCart className='header__cart-icon'/>
                        <span className="header__cart-icon-label">{state.cart.length}</span>
                    </div>
                </div>
                <div className="header__row header__row--2">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/'>Home</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/kitchen'>Kitchen</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/livingroom'>Living Room</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/badroom'>Badroom</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/kidsroom'>Kids Room</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/bathroom'>Bathroom</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__login">
                        <Link to='/' className='header__login-link'><span>login</span></Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;