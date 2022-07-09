import React from 'react';
import './testimonials-section.styles.css';

const testimonials = [
    {
        sectionName: "I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.",
        imageSource: `${process.env.PUBLIC_URL + `images/dog-img.jpg`}`,
        imageName: 'dog-profile',
        description: 'Pebbles, New York'
    },
    {
        sectionName: "My dog used to be so lonely, but with tinDog's help, they've found the love of their life. I think.",
        imageSource: `${process.env.PUBLIC_URL + `images/lady-img.jpg`}`,
        imageName: 'lady-profile',
        description: 'Beverly, Illinois'
    }
]

const TestimonialsSection = () => {

    return (
        <section id='testimonials'>
            <div id="testimonial-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2>{testimonials[0].sectionName}</h2>
                        <img className="testimonial-logo" src={testimonials[0].imageSource} alt={testimonials[0].imageName} />
                        <em>{testimonials[0].description}</em>
                    </div>
                    <div className="carousel-item">
                        <h2>{testimonials[1].sectionName}</h2>
                        <img className="testimonial-logo" src={testimonials[1].imageSource} alt={testimonials[1].imageName} />
                        <em>{testimonials[1].description}</em>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" ></span>
                </a>
                <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" ></span>
                </a>
            </div>
        </section>
    )
}

export default TestimonialsSection;