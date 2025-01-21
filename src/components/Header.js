import React from 'react'
import { CiSearch, CiUser } from "react-icons/ci";
import "./styles/Header.css"
import { FiArrowUpRight } from 'react-icons/fi';
function Header() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <h1>Dravel</h1>
        </div>
        <div className='header-right'>
            <ul>
                <li><a href='#'>World</a></li>
                <li><a href='#'>Politics</a></li>
                <li><a href='#'>Sports</a></li>
                <li><a href='#'>Lifestyle</a></li>
                <li><a href='#'>Tech</a></li>
                <li><a href='#'><CiSearch/></a></li>
                <li className="profile-property">
    <a href="#"><CiUser /></a>
    <div className="profile-dropdown">
        <a href="/login?redirect=home" className="dropdown-content">
            <span>Get Started</span>
            <FiArrowUpRight />
        </a>
    </div>
</li>

            </ul>
            
            
        </div>
    </div>
  )
}

export default Header