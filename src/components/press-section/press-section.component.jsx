import React from "react";
import './press-section.styles.css';

const PressSection = ({ techCrunch, tnw, bizInsider, mashable }) => {
    return (
        <section id='press-section'>
            <img className='press-logo' src={techCrunch} alt="tc-logo" />
            <img className='press-logo' src={tnw} alt="tnw-logo" />
            <img className='press-logo' src={bizInsider} alt="biz-insider-logo" />
            <img className='press-logo' src={mashable} alt="mashable-logo" />
        </section>
    )
}

export default PressSection;