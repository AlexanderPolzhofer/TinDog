import React from 'react';

const TitleSection = ({ headline, button, image, imageName }) => {

    return (
        <div>
            <div>
                <h1>{headline}</h1>
                <button type="button">{button}</button>
                <button type="button">{button}</button>
            </div>
            <div>
                <img src={image} alt={imageName} />
            </div>
        </div>
    )
}

export default TitleSection;