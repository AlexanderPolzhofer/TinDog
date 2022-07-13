import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.styles.css';

const Footer = () => {

    const companies = [faTwitter, faFacebook, faInstagram, faEnvelope];

    return (
        <footer id="footer">
            {companies.map((company, index) => { return <FontAwesomeIcon key={index} className='social-icon' icon={company} /> })}
            <p>© Copyright tinDog</p>
        </footer>
    )
}

export default Footer;