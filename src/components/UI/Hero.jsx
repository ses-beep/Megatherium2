import React from 'react';
import '../../styles/hero.css';

import heroDarkImg from '../../images/hero-img.png';
import lightImg from '../../images/light-hero-bg.jpg';

const Hero = ( {theme} ) => {
    return (
    <section className='hero_section' id='home'>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <div>
                        <h2>Professional</h2>
                        <h2>DevOps and</h2>
                        <h2>Cloud</h2>
                        <h2>development</h2>
                        <h2 className="highlight">Promote Your Brand</h2>
                    </div>
                    <p className="description">From the design of the front page over the development of your backend to the architecture of your cloud infrastructure ad the accompanyning of your development process by modern automated DevOps tools for building, testing, integration and delivery.Megatherium has got you covered.
                    </p>
                    <div className="hero_btns">
                        <button className="primary_btn">Get a Free Quote</button>
                        <button className="secondary_btn">Contact us Now</button>
                    </div>
                </div>

                <div className="hero_img">
                    <img src={ theme==='light-theme' ? lightImg : heroDarkImg} alt="hero-img" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero;