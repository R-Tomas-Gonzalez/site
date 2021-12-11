import React from 'react';
import './Header.scss';

export const Header = () => {
    return (
        <header>
            <nav className="main__nav">
                <h1 className="logo">Tomas Gonzalez</h1>
                <div className="nav__links">
                    <ul >
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <a className="cta" href="#"><button>Resume</button></a>
                </div>
            </nav>
        </header>
    )
}
