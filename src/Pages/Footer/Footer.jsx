import React from "react";
import "./footer.css";
import { CiSearch, CiLinkedin } from "react-icons/ci";
import google from "../../Components/assert/Group 136188.png";
import master from "../../Components/assert/Group 136190.png";
import icondata1 from "../../Components/assert/Group 136192.png";
import icondata2 from "../../Components/assert/Group 136193.png";
import icondata3 from "../../Components/assert/Group 136194.png";
import icondata4 from "../../Components/assert/Group 136195.png";
import icondata5 from "../../Components/assert/usa.jpeg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-title">
        <div className="footer-section">
          <h2>Be the first to know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <input type="email" placeholder="Enter your e-mail..." />
          <button className="btn">SUBSCRIBE</button>
        </div>
        <hr className="custom-hr3" />

        <div className="footer-right-title">
          <div className="footer-section">
            <h2 className="footh2">CONTACT US</h2>
            <p className="footerp">+44 221 133 5360</p>
            <p className="footerp1">customercare@mettamuse.com</p>
          </div>
          <hr className="custom-hr3" />

          <div className="footer-section">
            <h2>Currency</h2>
            <img className="images1" src={icondata5} alt="Icon" />
            <span className="usd-text">USD</span>
            <p className="sect-footer">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
          <hr className="custom-hr3" />
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <h3 className="footer-metta">mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-muse">
          <ul>
            <h3>mettā muse</h3>
            <hr className="custom-hr3" />
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3>FOLLOW US</h3>
          <hr className="custom-hr3" />
          <div className="footer-icon">
            <div><CiSearch /></div>
            <div><CiLinkedin /></div>
          </div>
          <h4>mettā muse Accepts</h4>
          <div className="footer-btn">
            <div><img src={google} alt="Google" /></div>
            <div><img src={master} alt="MasterCard" /></div>
            <div><img src={icondata1} alt="Icon 1" /></div>
            <div><img src={icondata2} alt="Icon 2" /></div>
            <div><img src={icondata3} alt="Icon 3" /></div>
            <div><img src={icondata4} alt="Icon 4" /></div>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
