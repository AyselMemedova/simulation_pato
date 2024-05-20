
import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"
import Detail from '../../../pages/site/detail/Detail'
const Header = () => {
    return (
        <div className='all'>

            <div className="logo">
                <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" />
            </div>

            <div className='list'>
                <ul>
                    <li>Home</li>
                    <li>Reservation</li>
                    <li>Galery</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>

            <div className="iler">
                <i class="fa-brands fa-earlybirds"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-solid fa-bars"></i>

            </div>

        </div>
    )
}

export default Header
