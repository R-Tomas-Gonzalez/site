import React from 'react';
import {HeroAbout} from './hero-about/HeroAbout';
import Social from './social-contact/Social';
import HeroImage from './hero-image/HeroImage';
import './hero.scss';

export const Hero = () => {
    return (
        <div className='hero__content'>
           <HeroAbout />
           <HeroImage />
           <Social />
        </div>
    )
}

