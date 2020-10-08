import React, { useState } from 'react';
import { Links } from './';
import companyLogo from '../images/logo.svg';
import open from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    console.log(mobileNavOpen)
    return (
        <div className="navbar">
            <img className="navbar__logo" src={companyLogo} alt="Room company logo" />
            
            <div className="navbar__links">
                <Links />
            </div>

            <a className={`navbar__btn ${mobileNavOpen ? 'x' : 'hamburger'}`} aria-label="Button for mobile nav deployment" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <img className="open" src={open} alt="" />
                <img className="close" src={close} alt="" />
            </a>

            <div className={`navbar__links--mobile ${mobileNavOpen ? 'show' : ''}`}>
                <Links />
            </div>
        </div>
    )

};

export default Navbar;