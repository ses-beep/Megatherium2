import React, {useRef, useEffect} from 'react';
import './header.css';


const nav_links =[
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#service',
        display: 'Service'
    },
    {
        path: '#projects',
        display: 'Projects'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]

const Header = ({theme, toggleTheme}) => {

    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const headerFunc = ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header_shrink')
        } else {
            headerRef.current.classList.remove('header_shrink')
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', headerFunc)

        return ()=> window.removeEventListener('scroll', headerFunc)
    },[])

    const handleClick = e => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')

        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    const toggleMeu = () => menuRef.current.classlist.toggle('menu_active');

    return (
        <header className='header' ref={headerRef}>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <h2>Megatherium</h2>
                        
                    </div>

                    {/* ========= navigation ========= */}
                    <div className="navigation" ref={menuRef} onClick={toggleMeu}>
                        <ul className="menu">
                            {nav_links.map((item, index) => (
                                <li className="menu_item" key={index}>
                                    <a href={item.path} onClick={handleClick}
                                    className="menu_link">
                                        {item.display}
                                    </a>
                                </li>
                            ))}  
                        </ul>
                    </div>

                   {/* ======= light mode ====== */} 
                   <div className="light_mode">
                    <span onClick={toggleTheme}>
                    {
                        theme === 'light-theme' ? (<span><i class="ri-moon-line"></i>Dark</span>) : (<span><i class="ri-sun-line"></i> Light</span>)
                    }
                        
                    </span>
                   </div>

                   <span className="mobile_menu" onClick={toggleMeu}>
                    <i class="ri-menu-line-"></i>
                   </span>
                </div>
            </div>
        </header>
    );
};

export default Header;