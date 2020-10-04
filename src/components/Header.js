import React, { useState } from 'react';
import arrow from '../images/icon-arrow.svg';
import iconAngleLeft from '../images/icon-angle-left.svg';
import iconAngleRight from '../images/icon-angle-right.svg';
import data from '../slider.json';

const Header = () => {
    const [current, setCurrent] = useState(0);
    const [headerSlides] = useState(data);

    const prev = () => {
        setCurrent(current === 0 ? headerSlides.length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(current != headerSlides.length - 1 ? current + 1 : 0)
    }

    return (
        <div className="header">
            <div className="header__image__container">
                <img src={require(`../images/desktop-` + headerSlides[current].image)} alt="Hero Image" />
            </div>

            <div className="header__textbox">
                <div className="header__pagination__arrows">
                    <button aria-label="Go to previous slide" onClick={prev}>
                        <img src={iconAngleLeft} alt="Angle left icon" />
                    </button>
                    <button aria-label="Go to next slide" onClick={next}>
                        <img src={iconAngleRight} alt="Angle right icon" />
                    </button>
                </div>
                <h1 className="header__textbox__heading">{headerSlides[current].heading}</h1>
                <p className="header__textbox__subheading">{headerSlides[current].subheading}</p>
                <a href="#" className="header__textbox__link">
                    <span>Shop Now</span> 
                    <img src={arrow} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Header;