import React from "react";

const PressSection = ({ techCrunch, tnw, bizInsider, mashable }) => {
    return (
        <section >
            <img src={techCrunch} alt="tc-logo" />
            <img src={tnw} alt="tnw-logo" />
            <img src={bizInsider} alt="biz-insider-logo" />
            <img src={mashable} alt="mashable-logo" />
        </section>
    )
}

export default PressSection;