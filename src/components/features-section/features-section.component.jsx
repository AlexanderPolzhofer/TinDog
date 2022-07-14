import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faCheckCircle,
    faBullseye
} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './features-section.styles.css';

const features = [
    {
        id: 1,
        title: "Easy to use",
        description: "So easy to use, even your dog could do it.",
        icon: faCheckCircle
    },
    {
        id: 2,
        title: 'Elite Clientele',
        description: 'We have all the dogs, the greatest dogs.',
        icon: faBullseye
    },
    {
        id: 3,
        title: 'Guaranteed to work.',
        description: "Find the love of your dog's life or your money back.",
        icon: faHeart
    }]
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