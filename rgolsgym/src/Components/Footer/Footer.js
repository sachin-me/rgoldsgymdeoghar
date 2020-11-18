import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <main className='footer'>
            <section>
                <div>
                    <h2>RGOLD <span style={{ color: "goldenrod" }}>GYM</span> </h2>
                </div>
                <div>
                    <p>Need Help?</p>
                    <p>Help Center</p>
                    <p>Email Support</p>
                    <p>Live Chat</p>
                    <p>Gift Certificates</p>
                    <p>Send Us Feedback</p>
                </div>
                <div>
                    <p>Digital Resources</p>
                    <p>Articles</p>
                    <p>E-books</p>
                </div>
                <div>
                    <p>Contact with Us</p>
                    <div className='socialMedia'>
                        <a href="https://youtu.be/rAy9FhHGkZs">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <FontAwesomeIcon icon={faFacebookF} />
                        <a href="instagram.com/rgoldsgym">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        {/* <FontAwesomeIcon icon={faTwitter} /> */}
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <p>Forum</p>
                </div>
                <div>
                    <p>Address</p>
                    <p>Satsang Nagar, Deoghar, Jharkhand 814116</p>
                </div>
                <div className="mobileFooter">
                    <p>Need Help?</p>
                    <p>Digital Resources</p>
                    <p>JOin Our Newsletter</p>
                </div>
            </section>
            <small>© {year}. Powered by Shivlabs</small>
        </main>
    );
};

export default Footer;