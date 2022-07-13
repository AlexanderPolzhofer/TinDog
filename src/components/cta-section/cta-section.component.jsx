import React from "react";
import './cta-section.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const CallToActionSection = () => {
    return (
        <section id='cta'>
            <h3 className="cta-heading">Find the True Love of Your Dog's Life Today.</h3>
            <button
                type="button"
                className="btn btn-dark download-button"
            >
                <FontAwesomeIcon icon={brands('apple')} />
                Download</button>
            <button
                type="button"
                className="btn btn-light download-button"
            >
                <FontAwesomeIcon icon={brands('google-play')} />
                Download</button>
        </section>
    )
}

export default CallToActionSection;