import React from 'react'
import { useEffect } from "react";
import { checkUserData } from "../js/HomeUtils";
import { useNavigate } from "react-router-dom";
import '../css/Home.css'

function Home() {

    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("userData"))

    useEffect(() => {
        checkUserData(navigate);
    }, [navigate]);

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">

                    <a href="/" className="logo d-flex align-items-center me-auto">
                        <h1 className="sitename">Dewi</h1>
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="/">ana sayfa</a></li>
                            <li><a href="#about">Altın Hesabı</a></li>
                            {data && data.userTypeId == 1 && <li><a href="#services">Kullanıcılar</a></li>}
                            {/*<li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>*/}
                            <li className="dropdown"><a className="cta-btn maindropdown" href="#">{data && data.name + " " + data.surname}</a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i
                                        className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li>
                            {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i
                                className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i
                                        className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li> */}
                            {/* <li><a href="#contact">Contact</a></li> */}
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                </div>
            </header >

            <main className="main">

                {/* Hero Section */}
                <section id="hero" className="hero section dark-background mainsection row">
                    <img src="/src/images/clouds.jpg" alt="" data-aos="fade-in" />
                    <div className="container d-flex flex-column align-items-center">
                        <h2 data-aos="fade-up" data-aos-delay="100">PLAN. LAUNCH. GROW.</h2>
                        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap
                        </p>
                        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                            <a href="#about" className="btn-get-started">Get Started</a>
                            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                className="glightbox btn-watch-video d-flex align-items-center"><i
                                    className="bi bi-play-circle"></i><span>Watch Video</span></a>
                        </div>
                    </div>

                    <footer id="footer" className="footer dark-background mainfooter">
                        <div className="container copyright text-center" >
                            <p>© <span>Copyright</span> <strong className="px-1 sitename">ALi</strong> {new Date().getFullYear()} <span>All Rights Reserved</span>
                            </p>
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a
                                    href="https://themewagon.com">ThemeWagon</a>
                            </div>
                        </div>
                    </footer>
                </section>{/* /Hero Section */}

            </main>

            {/* Scroll Top */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
        </>
    )
}

export default Home;