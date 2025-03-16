import React from 'react'
import { LogoutUser } from "../redux/slices/LoginSlice";
import { checkUserData } from "../js/HomeUtils";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("userData"));

    const handleLogout = () => {
        dispatch(LogoutUser());
        checkUserData(navigate)
    };

    useEffect(() => {
        checkUserData(navigate);
    }, [navigate]);

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">

                    <a href="/" className="logo d-flex align-items-center me-auto">
                        {/* <h1 className="sitename">Dewi</h1> */}
                        <img src="/ASembol.ico" className='sitename' style={{ maxHeight: '45px', width: '50px' }} />
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="/">ana sayfa</a></li>
                            <li><a href="/Gold">Altın Hesabı</a></li>
                            {data && data.userTypeId == 1 && <li><a href="/User">Kullanıcılar</a></li>}
                            {/*<li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>*/}
                            <li className="dropdown"><a className="cta-btn maindropdown" href="#">{data && data.name + " " + data.surname}</a>
                                <ul>
                                    <li><a href="#">Profil</a></li>
                                    <li><a href="#" onClick={handleLogout}>Çıkış</a></li>
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
        </>
    )
}

export default Header