
import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"

const Header = () => {
    return (
        <div className='admin'>
            <div className='admin_head_logo'>
                <h1>ADMIN</h1>
            </div>

            <div className='admin_list'>
                <ul>
                    <li> <Link to="/admin">Dashboard</Link></li>
                    <li> <Link to="/admin/add">Add</Link></li>
                    <li> <Link to="/admin/product">Prouduct</Link></li>


                </ul>

            </div>
        </div>
    )
}

export default Header
