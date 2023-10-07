import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area'>
        <div
          className='footer-top'
          style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/map-marker.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>OFFICE ADDRESS:</h6>
                    <p>Opal eye care, 1 st floor, building T1, Flower valley, Opposite Viviana mall, Thane west-400601</p>
                   
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/phone.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>CONTACT US:</h6>
                    <p>drkiranmore@yahoo.com</p>
                    <p>+91 9137359205</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top after-none'>
                  <div className='icon'>
                    <img src='assets/img/icon/clock.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>WORKING HOURS:</h6>
                    <p>Weekdays - Mon-Sat: 8am-6pm</p>
                    <p>Weekend - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/OplaeLogo.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <p>
                  After staying in four different continents we moved back to India permanently to offer my services to our Indian community. Opal eye care and glaucoma center is my first venture and a dream come true.
                  </p>
                  <ul className='social-media style-border'>
                    <li>
                      <a target="_blank" href='https://www.facebook.com/Opal-Eye-Care-Glaucoma-Center-1184703858339947/'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href='https://twitter.com/OpalEyeCare'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href='https://wa.link/e3qd8j'>
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href='https://www.instagram.com/opaleyecare/'>
                        <FaInstagram/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>USEFULL LINKS</h4>
                <ul>
                  <li>
                    <Link to='/about'>
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaArrowRight /> Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to='/blog'>
                      <FaArrowRight />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-2 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>OUR SERVICES</h4>
                <ul>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Air Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Ocean Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Railway Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Warehousing
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Distribution
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterOne;
