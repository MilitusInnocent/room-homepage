import React from 'react';
import { Links } from './';
import companyLogo from '../images/logo.svg';

const Navbar = () => {

    return (
        <div className="navbar">
            <div>
                <img className="navbar__logo" src={companyLogo} alt="Room company logo" />
            </div>
            
            <div className="navbar__links">
                <Links />
            </div>

        </div>
    )

};

export default Navbar;