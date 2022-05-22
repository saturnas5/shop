import React from "react";
import {Link} from 'react-router-dom';
import FooterNav from "../FooterNav";

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <FooterNav className={'help-box'} title={'Help'} links={['Order Status', 'Shipping', 'Contact Us', 'Terms & Privacy']} />
                <FooterNav className={'catalog-box'} title={'Catalog'} links={['Kitchen', 'Living Room', 'Badroom', 'Kids Room', 'Bathroom']} />
                <FooterNav className={'explore-box'} title={'Explore'} links={['Story', 'Product Resources', 'Design Ideas', 'Design Services']} />
                <FooterNav className={'social-box'} title={'Follow Us'} links={['Story', 'Product Resources', 'Design Ideas', 'Design Services']} />
                <FooterNav className={'about-box'} title={'About'} links={[]} about={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, assumenda cumque doloribus earum inventore ipsam minima neque possimus, quae quia velit voluptatem, voluptatibus! Deleniti itaque magni non officiis repellat ut?'} />
                <div className="footer__copyright">
                    <span className="footer__copyright-text">
                        copyright @ 2022 by Artas M.
                    </span>
                </div>
            </footer>
        </>
    );
}


export default Footer;