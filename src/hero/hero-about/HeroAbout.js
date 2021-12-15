import React from 'react';
import './heroabout.scss';

export const HeroAbout = () => {
    return (
        <div className="hero__about">
            <div className='intro'>
                <div className="profile__image">
                    <img src="./Profile.jpg"/>
                </div>
                <h1>Hi, my name is Tomas.</h1>
            </div>
            <p> A full-stack web developer with a passion for creating user experiences.
                Currently employed by Infosys, and contributing to Hack for LA.
                In my spare time I enjoy spending time with my girlfriend, drinking coffee and playing sports.
            </p>
            <p>
                Current city: Austin, TX
            </p>
        </div>
    )
}
