import React from 'react';

const Links = () => {
    const links = ['home', 'shop', 'about', 'contact'];

    return (
        <ul className="links__list">
             {links.map(link => (
                <li className="links__list__item" key={link}>
                    <a href='#'>
                        {link}
                    </a>
                </li> 
            ))}
        </ul>
    )
}

export default Links;