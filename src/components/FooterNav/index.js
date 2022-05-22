import React from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";

const FooterNav = ({links, title, className, about}) => {
    const clas = clsx({}, className)

    return (
        <>
            <div className={`footer__${clas}`}>
                <h4 className='footer__nav-box-title'>{title}</h4>
                <ul className="footer__nav-box-list">
                    {links.length > 0 ? links.map((link, index) => {
                        return (
                            <li key={index} className="footer__nav-box-list-item">
                                <Link className='footer__nav-box-list-item-link' to='/'>{link}</Link>
                            </li>
                        );
                    }) : <p className='footer__about-box-text'>{about}</p>}
                </ul>
            </div>
        </>
    );
}

export default FooterNav;