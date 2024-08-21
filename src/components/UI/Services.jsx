import React from 'react';
import '../../styles/services.css';

const serviceData = [
    {
        icon:'ri-apps-line',
        title:'Consulting',
        desc: 'Our experts provide you with valuables information and suggestions from their years of experience.'
    },

    {
        icon:'ri-landscspe-line',
        title:'Concept',
        desc: 'Not sure where to go yet? We gladly provide a cocept for you, tailored to your needs.'
    },

    {
        icon:'ri-code-s-slash-line',
        title:'Web Design',
        desc: 'Our proffesional developers resolve your infrastructural needs in a transparent process.'
    },

    {
        icon:'ri-rocket-line',
        title:'Service Department',
        desc: 'Need support in the development of your service? Be it API programming or a Microservice architecture, we have got you covered.'
    },
];

const Services = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="services_top-content">
                <h6 className='subtitle'>Our Services</h6>
                <h2>Take Your Web Services To The</h2>
                <h2 className="highlight">Next Level</h2>
            </div>

            <div className="service_item-wrapper">
                {
                    serviceData.map((item,index)=>(
                        <div className="services_item" key={index}>
                    <span className="services_icon"><i className={item.icon}></i></span>
                    <h3 className="service_title">{item.title}</h3>
                    <p className="description">{item.desc}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services;