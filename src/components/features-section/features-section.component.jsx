import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './features-section.styles.css';
import features from './../../assets/features';

const FeaturesSection = () => {

    return (
        <section>
            <div className='row'>
                {features.map(feature => {
                    const { id, title, description, icon } = feature;
                    return (<div
                        className='feature-box col-lg-4'
                        key={id}>
                        <FontAwesomeIcon
                            icon={icon}
                            size='4x'
                            style={
                                {
                                    color: '#ff4c68',
                                    marginBottom: '1rem'
                                }
                            }
                        />
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>)
                })}
            </div>
        </section>
    )
}

export default FeaturesSection;