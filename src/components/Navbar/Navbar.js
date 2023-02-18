import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown, FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { services }  from './dropDownMenuItemsData';
import './Navbar.css' 
import Button from '../Button/Button';

const Navbar = () => {
    // change nav color when scrolling
    const [hasScrolled, setHasScrolled] = useState(false)
    const changeColor = ( ) => {
        const heightBeforeScroll = window.innerHeight <= 600 || window.innerWidth <= 600 ? 5 : 90;
        if (window.scrollY >= heightBeforeScroll) {
            setHasScrolled(true)
        } 
        else {
            setHasScrolled(false)
        }
    }
    window.addEventListener("scroll", changeColor);

    const [clicked, setClicked] = useState(false)
    const toggleNavbar = () => setClicked(() => 
        {
            showModal();
            return !clicked;
        });

    let logoImg = hasScrolled ? '../../assets/regis-electric-logo.png' : '../../assets/regis-electric-logo-white.png';

    let navClass;
    if (hasScrolled && clicked) {
        navClass = 'nav nav__scroll nav__toggle'
    } else if (hasScrolled) {
        navClass = 'nav nav__scroll'
    } else if (clicked) { 
        navClass = 'nav nav__toggle'
    } else {
        navClass = 'nav'
    }

    const showModal = function (e) {
        // Select required elements from the DOM
        const modal = document.querySelector("nav");
        const body = document.querySelector("body");

        if (!modal.classList.contains("nav__toggle")) {
            // Disable scroll
            body.style.overflow = "hidden";
        } else {
            // Enable scroll
            body.style.overflow = "auto";
        }
    };


    const [linkClicked, setLinkClicked] = useState(false)
    const onLinkClick = () => setLinkClicked(() =>
        {
            clicked && toggleNavbar();
            return !linkClicked;
        })

    return (
        <nav className={navClass}>
            <div className="container">
                <div>
                    <Link to='/' onClick={onLinkClick}>
                        <img className='nav__logo' src={logoImg} alt="Regis Electric Logo" />    
                    </Link>  
                </div>
                <div className="nav__menu__btn">
                    <AiOutlineMenu onClick={toggleNavbar} />
                </div>
                <div className="nav__menu">
                    <div className="nav__menu__btn">
                        <FaTimes onClick={toggleNavbar}/>
                    </div>
                    <ul className='nav__list'>
                    <li className='nav__list__item'>
                            <NavLink to="/" className='nav-link' onClick={onLinkClick}>Home</NavLink>
                        </li>
                        <li className='nav__list__item'>
                            <NavLink to="about" className='nav-link' onClick={onLinkClick}>About</NavLink>
                        </li>
                        <li className='nav__list__item menu-item' >
                            <NavLink to='/services/residential/solar' className='nav-link' tabIndex={0}>
                                Services<FaCaretDown className={`caret-down-icon `}/>
                            </NavLink>
                            <div className={`nav-submenu`}>
                                <ul className='p-0 m-0'>
                                    {services.map(service => 
                                        <li key={service.id} className='m-0 p-0'>
                                            <NavLink to={service.path} className='nav-link nav-sub-link' onClick={onLinkClick}>{service.text}</NavLink>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </li>
                        <li className='nav__list__item'>
                            <NavLink to="contact" className='nav-link' onClick={onLinkClick}>Contact</NavLink>
                        </li>
                        <li className='nav__list__item'>
                            <Button text='808-755-3297'
                                    path='https://wa.me/18087553297'
                                    className='nav-btn'
                                    istargetBlank={true}/>
                        </li>
                    </ul>
                </div>
            </div>
                
        </nav>
    )
}

export default Navbar