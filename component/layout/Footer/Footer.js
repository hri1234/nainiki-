import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
   
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeAbhiSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <div className="icon">
        <i class="fa fa-instagram" style={{color:"red",}} > </i>
        <a href="http://instagram.com/meabhisingh" className="ml-2" style={{color:"wheat"}}>Instagram</a>  
        </div>
        <div className="icon">
        <i class="fa fa-youtube-play b "  style={{color:"red"}}></i>
          <a href="http://youtube.com/6packprogramemr" className="ml-2" style={{color:"wheat"}}> Youtube</a>
          </div>
          <div className="icon">
          <i class="fa fa-facebook-f"  style={{color:"blue"}}></i>
        <a href="http://instagram.com/meabhisingh" className="ml-2" style={{color:"wheat"}}>Facebook</a>
      </div>
      </div>
    </footer>
   
    </>
  );
};

export default Footer;
