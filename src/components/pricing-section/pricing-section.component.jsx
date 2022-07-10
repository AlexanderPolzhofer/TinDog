import React from "react";
import './pricing.styles.css';
import CardContainer from "../card-container/card-container.component";

const PricingSection = () => {
    return (
        <section id='pricing'>
            <h2>A Plan for Every Dog's Needs</h2>
            <p>Simple and affordable price plans for your and your dog.</p>
            <CardContainer />
        </section>
    )
}

export default PricingSection;