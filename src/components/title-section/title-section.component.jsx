import React from 'react';

const TitleSection = ({ headline, button, imageSource, imageName }) => {

    return (
        <section>
            <div>
                <h1>{headline}</h1>
                <button type="button">{button}</button>
                <button type="button">{button}</button>
            </div>
            <div>
                <img src={imageSource} alt={imageName} />
            </div>
        </section>
    )
}

export default TitleSection;