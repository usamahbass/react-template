import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div>
                    <input className="input-type" type="text" placeholder="Search for.." />
                    <button class="input-btn"><i class="fa fa-search"></i></button>
                </div>
                <div className="title-name">
                    <i className="fa fa-user-circle"></i>
                </div>
            </div>
        </div>
    )
}

export default Header;
