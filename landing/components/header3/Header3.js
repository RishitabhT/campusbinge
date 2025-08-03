import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import icon1 from '/public/images/icons/icon_wifi.svg'
import icon2 from '/public/images/icons/icon_dollar_2.svg'
import icon3 from '/public/images/icons/icon_chart.svg'
import icon4 from '/public/images/icons/icon_tag_2.svg'
import icon5 from '/public/images/icons/icon_user_2.svg'
import icon6 from '/public/images/icons/icon_users.svg'
import icon7 from '/public/images/icons/icon_pen.svg'
import icon8 from '/public/images/clients/client_logo_9.webp'
import icon9 from '/public/images/clients/client_logo_10.webp'
import icon10 from '/public/images/avatar/avatar_7.webp'
import icon11 from '/public/images/icons/icon_quote.svg'
import logo from '/public/images/site_logo/logo.png'
import cases from '/public/images/case/case_image_4.webp'
import MobileMenu from '../MobileMenu/MobileMenu'
import Image from 'next/image';

const Header3 = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <header className="site_header site_header_3">
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" href="/" style={{background:'White',borderRadius:'50px',padding:'0 12px'}}>
                                    <Image src={logo} alt="Site Logo – Techco – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">
                                        <li className="">
                                            <Link onClick={ClickHandler} className="nav-link" href="/" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Home
                                            </Link>
                                            
                                        </li>
                                        <li className="">
                                            <Link onClick={ClickHandler} className="nav-link" href="/about" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                About
                                            </Link>
    
                                        </li>
                                        <li className="">
                                            <Link onClick={ClickHandler} className="nav-link" href="/chapter" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Chapters
                                            </Link>
                                            
                                        </li>
                                        
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-5">
                            <ul className="header_btns_group unordered_list justify-content-end">
                                <li>
                                    <button className="mobile_menu_btn" onClick={() => setMobailState(!mobailActive)} type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="far fa-bars"></i>
                                    </button>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} className="btn btn-light" href="/comingsoon">
                                        <span className="btn_label" data-text="Get Started">Binge Community</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobail-wrap">
                    <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                            <nav className="xb-header-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div>
            </div>
        </header>

    )
}

export default Header3;