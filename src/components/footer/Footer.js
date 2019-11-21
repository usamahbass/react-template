import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-page">
                <div className="footer-title">
                    <h6>Follow Us :</h6>
                </div>
                <div className="footer-icon">
                    <a href="https://www.facebook.com/usamahbasalalamah.9"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href="https://www.github.com/usamahbass"><i className="fab fa-github fa-2x"></i></a>
                    <a href="https://www.instagram.com/usamah_bass"><i className="fab fa-instagram fa-2x"></i></a>
                </div>
                <div className="footer-copyright">
                    &copy;2019 Bass
                </div>
            </div>
        </div>
    )
}

export default Footer
