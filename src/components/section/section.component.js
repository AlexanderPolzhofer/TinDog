import React from 'react';

const Section = (props) => {

    const { headline, button, image, imageName } = props;

    return (
        <section>
            <div>
                <h1>{headline}</h1>
                <button type="button">{button}</button>
            </div>
            <div>
                <img src={image} alt={imageName} />
            </div>
        </section>
    )
}

export default Section;