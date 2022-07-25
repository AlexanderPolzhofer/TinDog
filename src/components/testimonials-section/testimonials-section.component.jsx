import React from 'react';
import './testimonials-section.styles.css';
import testimonials from '../../assets/testimonials';

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
                    <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" ></span>
                    </a>
                    <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" ></span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;