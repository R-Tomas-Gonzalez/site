import React from 'react';
import { HeroAbout } from './hero-about/HeroAbout';
import './hero.scss';
import Social from './social-contact/Social';

export const Hero = () => {
    return (
        <div className='hero__content'>
           <Social />
           <HeroAbout />
        </div>
    )
}

