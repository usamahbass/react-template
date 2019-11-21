import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <i className="fa fa-terminal fa-4x"></i>
            <ul className="sidebar-nav">
                <li className="sidebar-nav-item">
                    <a href="#">
                        Home
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#skill">
                        Skill
                    </a>
                </li>
                <li className="sidebar-nav-item">
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
