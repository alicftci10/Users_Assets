import React from 'react'
import { useEffect } from "react";
import { checkUserData } from "../js/HomeUtils";
import { useNavigate } from "react-router-dom";
import '../css/Home.css'

function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        checkUserData(navigate);
    }, [navigate]);

    return (
        <div>
            Home
        </div>
    )
}

export default Home;