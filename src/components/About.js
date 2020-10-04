import React from 'react';
import darkAbout from '../images/image-about-dark.jpg';
import lightAbout from '../images/image-about-light.jpg';

const About = () => (
    <div className="about">
        <div className="about__image__container">
            <img src={darkAbout} alt="Black loveseats" />
        </div>

        <div className="about__textbox">
            <h1 className="about__textbox__heading">About Our Furniture</h1>
            <p className="about__textbox__text">
                Our multifunctional collection blends design and function to suit your 
                individual taste. Make each room unique, or pick a cohesive theme that 
                best express your interests and what inspires you. Find the furniture 
                pieces you need, from traditional to contemporary styles or anything in between. 
                Product specialists are available to help you create your dream space. 
            </p>
        </div>

        <div className="about__image__container">
            <img src={lightAbout} alt="White modern style chair" />
        </div>
    </div>
)

export default About;