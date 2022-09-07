import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import logo from "../../../images/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download app for Android and IOS users</p>
            <img src={playStore} alt="PlayStore"/>
            <img src={appStore} alt="AppStore"/>
        </div>

        <div className="midFooter">
            <img src={logo} alt="Logo"/>
            <p>India's No.1 Ecommerce Website</p>

            <p>Copyright 2022 &copy; adarsh23100</p>
        </div>

        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="http://instagram.com">Instagram</a>
            <a href="http://youtube.com">Youtube</a>
            <a href="http://facebook.com">Facebook</a>
        </div>
    </footer>
  )
}

export default Footer;