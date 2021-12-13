import React from 'react';
import './Header.scss';

export const Header = () => {
    return (
        <header>
            <nav className='main__nav'>
                <div className='logo__container'>
                    <div className='logo'>R. Tomas Gonzalez</div>
                    <div className='logo__contact'>r.tomas.gonzalez01@gmail.com | 210-639-8262</div>
                </div>
                <div className="nav__links">
                    <ul >
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <a className='cta' href="#"><button>Resume</button></a>
                </div>
            </nav>
        </header>
    )
}
