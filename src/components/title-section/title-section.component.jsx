import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';
import './title-section.style.css';

const TitleSection = ({ headline, button, imageSource, imageName }) => {

    return (
        <section id='titleSection'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>{headline}</h1>
                    <button
                        type="button"
                        className='btn btn-dark'>
                        <FontAwesomeIcon icon={brands('apple')} />
                        {button}
                    </button>
                    <button
                        type="button"
                        className='btn btn-outline-light'>
                        <FontAwesomeIcon icon={brands('google-play')} />
                        {button}
                    </button>
                </div>
                <div className='col-lg-6'>
                    <img src={imageSource} alt={imageName} />
                </div>
            </div>
        </section>
    )
}

export default TitleSection;