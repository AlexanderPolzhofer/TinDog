import React from 'react';

const TestimonialsSection = ({ sectionName, imageSource, imageName, description }) => {
    return (
        <section>
            <h2>{sectionName}</h2>
            <img src={imageSource} alt={imageName} />
            <em>{description}</em>
        </section>
    )
}

export default TestimonialsSection;