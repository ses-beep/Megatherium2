import React from 'react';
import './footer.css';

const quickLinks01 = [
    {
        path: '#',
        display: 'DevOps',
    },
    {
        path: '#',
        display: 'Infrastructure',
    },
    {
        path: '#',
        display: 'Frontend, Backend Website',
    },
];

const quickLinks02 = [
    {
        path: '#',
        display: 'RomerstaBe11',
    },
    {
        path: '#',
        display: '61389 Schmitten (Taunus)',
    },
    {
        path: '#',
        display: 'Hessen, Germany',
    },
];

const quickLinks03 = [
    {
        path: '#about',
        display: 'Project Management',
    },
    {
        path: '#',
        display: 'Quality Assuarance',
    },
    {
        path: '#blog',
        display: 'Documentation',
    },
];

const Footer = () => {

    const Year = new Date().getFullYear();
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <h2>Megatherium</h2>
                    <p className="description">Services</p>

                    <p className="small_text description">Because the best solutions are simple.</p>
                </div>

                <div className="footer_quick-links">
                    <h3 className="quick_links-title">Solutions</h3>
                    <ul className="quick_links">
                        {
                            quickLinks01.map((item, index)=>(
                                <li className="quick_link-tem" key={index}><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer_quick-links">
                    <h3 className="quick_links-title">Contact Us</h3>
                    <ul className="quick_links">
                        {
                            quickLinks02.map((item, index)=>(
                                <li className="quick_link-tem" key={index}><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer_quick-links">
                    <h3 className="quick_links-title">How We Work</h3>
                    <ul className="quick_links">
                        {
                            quickLinks03
                            .map((item, index)=>(
                                <li className="quick_link-tem" key={index}><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <p className="copyright">Copyright {Year}, developed by Moses Wambua. All rights reserved.{""} </p>
        </div>
    </footer>
  )
}

export default Footer