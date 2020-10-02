import React from 'react';
import heroImage from '../images/desktop-image-hero-1.jpg';
import arrow from '../images/icon-arrow.svg';
import iconAngleLeft from '../images/icon-angle-left.svg';
import iconAngleRight from '../images/icon-angle-right.svg';

const Header = () => (
    <div className="header">
        <div className="header__image__container">
            <img src={heroImage} alt="Hero Image" />
        </div>

        <div className="header__textbox">
            <div className="header__textbox__icons">
                <img src={iconAngleLeft} alt="Angle left icon" />
                <img src={iconAngleRight} alt="Angle right icon" />
            </div>
            <h1 className="header__textbox__heading">Discover innovative ways to 
            decorate
            </h1>
            <p className="header__textbox__subheading">
            We provide unmatched quality, comfort, and style for 
            property owners across the country. Our experts combine 
            form and function in bringing your vision to life. Create a
            room in your own style with out collection and make your property
            a reflection of you and what you have.
            </p>
            <a href="#" className="header__link"><span>SHOP NOW</span> <img src={arrow} /></a>
        </div>
    </div>
)

export default Header;