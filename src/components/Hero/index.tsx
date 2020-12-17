import React from 'react';
import './style.css';
import '../../global.css';

const Hero: React.FC = () => {
    return (
        <div className={'hero-background'}>
            <div className={'hero-container'}>
                <h1 className={'my-hero-name'}>{'Gary Burner'}</h1>
                <h3 className={'my-hero-desc'}>{'Full Stack JS Developer'}</h3>
            </div>
        </div>
    )
};

export default Hero;