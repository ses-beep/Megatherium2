import React from 'react';
import '../../styles/about.css';
import aboutImg from '../../images/about-us.jpg';

const chooseData = [
    {
        icon:'ri-wifi-line',
        title:'Consulting',
        desc:'Our experts provide you with valuable information and suggestions from their years of experience'
    },

    {
        icon:'ri-team-line',
        title:'Concept',
        desc:'Not sure where to go yet? We gladly provide a concept for you, tailored to your needs.'
    },

    {
        icon:'ri-customer-service-2-line',
        title:'Development',
        desc:'Our profesional developers resolve your infrastructural needs in  a transparent process.'
    },
];

const About = () => {
  return <section id="about">
    <div className="container">
        <div className="about_wrapper">
            <div className="about_content">
                <h6 className='subtitle'>Why Choose Us</h6>
                <h2>Specialists in aviding clients on</h2>
                <h2 className="highlight">financial challenges</h2>
                <p className="description about_content-desc">From the design of the front page over the development of your backend to the architecture and the accompanying of your development process by modern automated DevOps tools for building, testing, integration and delivery: Megatherium has got you covered.</p>

                <div className='choose_item-wrapper'>
                    {
                        chooseData.map((item,index)=>(
                            <div className="choose_us-item" key={index}>
                                <span className="choose_us-icon"><i className={item.icon}></i></span>
                                <div>
                                    <h4 className="choose_us-title">{item.title}</h4>
                                    <p className="description">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className="about_img">
                <img src={aboutImg} alt="" />
            </div>
        </div>
    </div>
  </section>
};

export default About;