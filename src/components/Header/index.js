import React from "react";
import {NavLink, Link} from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import logo from '../../assets/img/logo.png';

const Header = () => {

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
                    </div>
                </div>
                <div className="header__row header__row--2">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/'>Home</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/'>Kitchen</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/'>Living Room</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/'>Badroom</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/'>Kids Room</NavLink>
                            </li>
                            <li className="header__nav-list-item">
                                <NavLink activeClassName='active-link' className='header__nav-list-item-link' to='/'>Bathroom</NavLink>
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